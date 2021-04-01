import React from "react";
import * as S from "./style";

const SignUp = ({ changeLogin }) => {
  const onClickModeChangeButton = (e) => {
    e.preventDefault();
    changeLogin();
  };

  return (
    <S.AccountContainer>
      <S.AccountTitleContainer>
        <S.AccountTitle>회원가입</S.AccountTitle>
      </S.AccountTitleContainer>
      <S.AccountInputContainer>
        <S.EmailVerificationContainer>
          <S.AccountInput placeholder={"이메일"} />
          <S.EmptySpaceBetweenInputAndButton />
          <S.EmailSendButton>전송</S.EmailSendButton>
        </S.EmailVerificationContainer>
        <S.AccountInput placeholder={"비밀번호"} />
        <S.AccountInput placeholder={"인증번호"} />
      </S.AccountInputContainer>
      <S.AccountButtonContainer>
        <S.AccountButton>회원가입</S.AccountButton>
      </S.AccountButtonContainer>
      <S.AccountModeChangeButton onClick={onClickModeChangeButton}>
        이미 계정이 있으신가요?
      </S.AccountModeChangeButton>
    </S.AccountContainer>
  );
};

export default SignUp;
