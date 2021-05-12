import React, { useState } from "react";
import axios from "axios";
import * as S from "../style";
import config from "../../../config";
import Button from "../../default/button/Button";
import Input from "../../default/input/Input";

const SignUp = ({ setLoginMode, email, password, setEmail, setPassword }) => {
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`${config.SERVER_URL}/auth/sign-up`, { email, password })
      .then((signUpResult) => {
        alert("회원가입 성공");
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
    <S.AccountWrapper>
      <S.AccountTitleWrapper>
        <S.AccountTitle>회원가입</S.AccountTitle>
      </S.AccountTitleWrapper>
      <S.SubmitForm onSubmit={onSubmitSignUp}>
        <S.AccountInputWrapper>
          <S.EmailVerificationWrapper>
            <Input
              value={email}
              placeholder={"이메일"}
              onChange={onChangeEmail}
            />
            <S.EmptySpaceBetweenInputAndButton />
            <S.EmailSendButton>전송</S.EmailSendButton>
          </S.EmailVerificationWrapper>
          <Input
            value={password}
            placeholder={"비밀번호"}
            onChange={onChangePassword}
            type={"password"}
          />
          <Input placeholder={"인증번호"} />
        </S.AccountInputWrapper>
        <Button value="회원가입" />
      </S.SubmitForm>
      <S.AccountModeChangeAnchor onClick={setLoginMode}>
        이미 계정이 있으신가요?
      </S.AccountModeChangeAnchor>
    </S.AccountWrapper>
  );
};

export default SignUp;
