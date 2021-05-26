import React from "react";
import Header from "./header";
import * as S from "./style";

const Match = ({ onStartMatch }) => {
  return (
    <>
      <Header />
      <S.MatchingButtonWrapper>
        <S.MatchingButton onClick={onStartMatch}>
          <S.MatchingText>랜덤 매칭</S.MatchingText>
        </S.MatchingButton>
      </S.MatchingButtonWrapper>
    </>
  );
};

export default Match;
