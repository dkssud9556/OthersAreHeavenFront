import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";
import config from "../../config";

const SignUp = ({ changeLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickModeChangeButton = (e) => {
    e.preventDefault();
    changeLogin();
  };

  const onSubmitSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${config.SERVER_URL}/auth/sign-up`, { email, password })
      .then((signUpResult) => {
        alert("회원가입 성공");
        changeLogin();
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400: {
            return alert("입력값을 확인해주세요.");
          }
          case 409: {
            return alert("이미 존재하는 이메일입니다.");
          }
          default: {
            alert("Internal Server Error");
          }
        }
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <S.AccountContainer>
      <S.AccountTitleContainer>
        <S.AccountTitle>회원가입</S.AccountTitle>
      </S.AccountTitleContainer>
      <S.SubmitForm onSubmit={onSubmitSignUp}>
        <S.AccountInputContainer>
          <S.EmailVerificationContainer>
            <S.AccountInput placeholder={"이메일"} onChange={onChangeEmail} />
            <S.EmptySpaceBetweenInputAndButton />
            <S.EmailSendButton>전송</S.EmailSendButton>
          </S.EmailVerificationContainer>
          <S.AccountInput
            placeholder={"비밀번호"}
            onChange={onChangePassword}
            type={"password"}
          />
          <S.AccountInput placeholder={"인증번호"} />
        </S.AccountInputContainer>
        <S.AccountButtonContainer>
          <S.AccountButton>회원가입</S.AccountButton>
        </S.AccountButtonContainer>
      </S.SubmitForm>
      <S.AccountModeChangeButton onClick={onClickModeChangeButton}>
        이미 계정이 있으신가요?
      </S.AccountModeChangeButton>
    </S.AccountContainer>
  );
};

export default SignUp;
