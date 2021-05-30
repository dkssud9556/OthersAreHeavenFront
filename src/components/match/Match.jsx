import React from "react";
import Header from "./header";
import * as S from "./style";

const Match = ({ onStartMatching, onClickLogout }) => {
  return (
    <>
      <Header onClickLogout={onClickLogout} />
      <S.MatchingButtonWrapper>
        <S.MatchingButton onClick={onStartMatching}>
          <S.MatchingText>랜덤 매칭</S.MatchingText>
        </S.MatchingButton>
      </S.MatchingButtonWrapper>
    </>
  );
};

export default Match;
