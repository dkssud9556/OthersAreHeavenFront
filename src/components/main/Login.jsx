import React from "react";
import * as S from "./style";

const Login = ({ changeSignUp }) => {
  const onClickModeChangeButton = (e) => {
    e.preventDefault();
    changeSignUp();
  };

  return (
    <S.AccountContainer>
      <S.AccountTitleContainer>
        <S.AccountTitle>로그인</S.AccountTitle>
      </S.AccountTitleContainer>
      <S.AccountInputContainer>
        <S.AccountInput placeholder={"이메일"} />
        <S.AccountInput placeholder={"비밀번호"} />
      </S.AccountInputContainer>
      <S.AccountButtonContainer>
        <S.AccountButton>로그인</S.AccountButton>
      </S.AccountButtonContainer>
      <S.AccountModeChangeButton onClick={onClickModeChangeButton}>
        회원 가입 하시겠습니까?
      </S.AccountModeChangeButton>
    </S.AccountContainer>
  );
};

export default Login;
