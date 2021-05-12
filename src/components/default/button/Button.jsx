import React from "react";
import * as S from "./style";

const Button = ({ value }) => {
  return (
    <S.AccountButtonWrapper>
      <S.AccountButton>{value}</S.AccountButton>
    </S.AccountButtonWrapper>
  );
};

export default Button;
