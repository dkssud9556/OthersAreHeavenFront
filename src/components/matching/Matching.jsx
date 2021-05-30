import React from "react";

const Matching = ({
  isMatched,
  chats,
  onChangeContent,
  onSubmitChat,
  content,
  onClickFindNewUser,
  onClickStopMatching,
}) => {
  return isMatched ? (
    <>
      <div>매치됨</div>
      {chats.map((chat) => (
        <div>
          <span>{chat.content}</span>
        </div>
      ))}
      <form onSubmit={onSubmitChat}>
        <input placeholder="할 말" onChange={onChangeContent} value={content} />
        <button type="submit">전송</button>
      </form>
      <button onClick={onClickFindNewUser}>다른 사람 만나기</button>
      <button onClick={onClickStopMatching}>매칭 그만하기</button>
    </>
  ) : (
    <div>매칭중...</div>
  );
};

export default Matching;
