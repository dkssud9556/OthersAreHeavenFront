import React from "react";
import * as S from "./style";

const Matching = ({
  isMatched,
  chats,
  onChangeContent,
  onSubmitChat,
  content,
  onClickFindNewUser,
  onClickStopMatching,
  email,
}) => {
  return isMatched ? (
    <S.ChatBackground>
      <S.ChatArea>
        {chats.map((chat) => (
          <div>
            {chat.senderEmail === "system"
              ? "시스템"
              : chat.senderEmail === email
              ? "나"
              : "상대"}{" "}
            : {chat.content}
          </div>
        ))}
      </S.ChatArea>

      <S.ChatSubmitWrapper onSubmit={onSubmitChat}>
        <S.ChatInput
          placeholder="할 말"
          onChange={onChangeContent}
          value={content}
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
    <div>매칭중...</div>
  );
};

export default Matching;
