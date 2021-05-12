import React, { useState } from "react";
import * as S from "../main/style";
import axios from "axios";
import config from "../../config";
import Button from "../default/button/Button";
import Input from "../default/input/Input";

const Login = ({ setLoginMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Input placeholder="이메일" value={email} onChange={onChangeEmail} />
          <Input
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
        </S.AccountInputContainer>
        <Button value="로그인" />
      </S.SubmitForm>
      <S.AccountModeChangeButton onClick={setLoginMode}>
        회원 가입 하시겠습니까?
      </S.AccountModeChangeButton>
    </S.AccountContainer>
  );
};

export default Login;
