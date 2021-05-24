import React, { useState } from "react";
import axios from "axios";
import * as S from "../style";
import config from "../../../config";
import Button from "../../default/button/Button";
import Input from "../../default/input/Input";

const SignUp = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSignup,
  onClickLoginModeAnchor,
}) => {
  return (
    <S.AccountWrapper>
      <S.AccountTitleWrapper>
        <S.AccountTitle>회원가입</S.AccountTitle>
      </S.AccountTitleWrapper>
      <S.SubmitForm onSubmit={onSignup}>
        <S.AccountInputWrapper>
          <Input
            value={email}
            placeholder={"이메일"}
            onChange={onChangeEmail}
          />
          <Input
            value={password}
            placeholder={"비밀번호"}
            onChange={onChangePassword}
            type={"password"}
          />
        </S.AccountInputWrapper>
        <Button value="회원가입" />
      </S.SubmitForm>
      <S.AccountModeChangeAnchor onClick={onClickLoginModeAnchor}>
        이미 계정이 있으신가요?
      </S.AccountModeChangeAnchor>
    </S.AccountWrapper>
  );
};

export default SignUp;
