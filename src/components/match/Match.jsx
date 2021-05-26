import React from "react";
import Header from "./header";
import * as S from "./style";

const Match = () => {
  return (
    <>
      <Header />
      <S.MatchingButtonWrapper>
        <S.MatchingButton>
          <S.MatchingText>랜덤 매칭</S.MatchingText>
        </S.MatchingButton>
      </S.MatchingButtonWrapper>
    </>
  );
};

export default Match;