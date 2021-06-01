import React, { useEffect, useRef } from "react";
import * as S from "./style";
import MatchingWaiting from "./MatchingWaiting";

const Matching = ({
  isMatched,
  chats,
  setChats,
  onChangeContent,
  onSubmitChat,
  content,
  onClickFindNewUser,
  onClickStopMatching,
  email,
  isLeaveOpposite,
  setIsLeaveOpposite,
  onClickExitMatchingButton,
  chatArea,
}) => {
  // console.dir(chatArea.current);
  // if (
  //   chatArea.current.scrollTop ===
  //   chatArea.current.scrollHeight - chatArea.current.offsetHeight
  // ) {
  // }
  useEffect(() => {
    setIsLeaveOpposite(false);
    setChats([]);
  }, [isMatched]);

  return isMatched ? (
    <S.ChatBackground>
      <S.ChatArea ref={chatArea}>
        {chats.map((chat) =>
          chat.senderEmail === "system" ? (
            <S.SystemSpeechBubble>{chat.content}</S.SystemSpeechBubble>
          ) : chat.senderEmail === email ? (
            <S.MySpeechBubble>{chat.content}</S.MySpeechBubble>
          ) : (
            <S.OppositeSpeechBubble>{chat.content}</S.OppositeSpeechBubble>
          )
        )}
      </S.ChatArea>

      <S.ChatSubmitWrapper onSubmit={onSubmitChat}>
        <S.ChatInput
          placeholder="할 말"
          onChange={onChangeContent}
          value={content}
          disabled={isLeaveOpposite}
        />
        <S.ChatSubmitButton type="submit">전송</S.ChatSubmitButton>
        <S.ChatExitWrapper>
          <S.FindNewUserButton onClick={onClickFindNewUser}>
            다른 사람 만나기
          </S.FindNewUserButton>
          <S.StopMatchingButton onClick={onClickStopMatching}>
            매칭 그만하기
          </S.StopMatchingButton>
        </S.ChatExitWrapper>
      </S.ChatSubmitWrapper>
    </S.ChatBackground>
  ) : (
    <MatchingWaiting onClickExitMatchingButton={onClickExitMatchingButton} />
  );
};

export default Matching;
