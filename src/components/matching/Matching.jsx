import React from "react";
import Header from "./header/Header";
import * as S from "./style";

const Matching = () => {
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

export default Matching;
