import React, { useState } from "react";
import * as S from "../style";
import axios from "axios";
import config from "../../../config";
import Button from "../../default/button/Button";
import Input from "../../default/input/Input";

const Login = ({ setLoginMode, email, password, setEmail, setPassword }) => {
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
    <S.AccountWrapper>
      <S.AccountTitleWrapper>
        <S.AccountTitle>로그인</S.AccountTitle>
      </S.AccountTitleWrapper>
      <S.SubmitForm onSubmit={onSubmitLogin}>
        <S.AccountInputWrapper>
          <Input placeholder="이메일" value={email} onChange={onChangeEmail} />
          <Input
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
        </S.AccountInputWrapper>
        <Button value="로그인" />
      </S.SubmitForm>
      <S.AccountModeChangeAnchor onClick={setLoginMode}>
        회원 가입 하시겠습니까?
      </S.AccountModeChangeAnchor>
    </S.AccountWrapper>
  );
};

export default Login;
