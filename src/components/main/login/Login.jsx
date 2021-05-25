import React from "react";
import * as S from "../style";
import Button from "../../default/button/Button";
import Input from "../../default/input/Input";

const Login = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onClickLoginModeAnchor,
  onLogin,
}) => {
  return (
    <S.AccountWrapper>
      <S.AccountTitleWrapper>
        <S.AccountTitle>로그인</S.AccountTitle>
      </S.AccountTitleWrapper>
      <S.SubmitForm onSubmit={onLogin}>
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
      <S.AccountModeChangeAnchor onClick={onClickLoginModeAnchor}>
        회원 가입 하시겠습니까?
      </S.AccountModeChangeAnchor>
    </S.AccountWrapper>
  );
};

export default Login;
