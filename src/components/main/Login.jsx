import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import config from "../../config";

const Login = ({ changeSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickModeChangeButton = (e) => {
    e.preventDefault();
    changeSignUp();
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${config.SERVER_URL}/auth`, { email, password })
      .then((loginResult) => {
        alert("로그인 성공");
        localStorage.setItem("accessToken", loginResult.data.accessToken);
        axios.defaults.headers.common["Authorization"] =
          loginResult.data.accessToken;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.AccountContainer>
      <S.AccountTitleContainer>
        <S.AccountTitle>로그인</S.AccountTitle>
      </S.AccountTitleContainer>
      <S.SubmitForm onSubmit={onSubmitLogin}>
        <S.AccountInputContainer>
          <S.AccountInput
            placeholder={"이메일"}
            value={email}
            onChange={onChangeEmail}
          />
          <S.AccountInput
            placeholder={"비밀번호"}
            value={password}
            onChange={onChangePassword}
            type={"password"}
          />
        </S.AccountInputContainer>
        <S.AccountButtonContainer>
          <S.AccountButton>로그인</S.AccountButton>
        </S.AccountButtonContainer>
      </S.SubmitForm>
      <S.AccountModeChangeButton onClick={onClickModeChangeButton}>
        회원 가입 하시겠습니까?
      </S.AccountModeChangeButton>
    </S.AccountContainer>
  );
};

export default Login;
