import React from "react";
import * as S from "./style";
import Background from "../../assets/img/main-background.jpg";
import Login from "./login";
import SignUp from "./signup";

const Main = ({
  isLoginMode,
  signupEmail,
  signupPassword,
  loginEmail,
  loginPassword,
  onSignup,
  onClickLoginModeAnchor,
  onChangeLoginEmail,
  onChangeLoginPassword,
  onChangeSignupEmail,
  onChangeSignupPassword,
  onLogin,
}) => {
  return (
    <S.MainPage url={Background}>
      <S.TitleWrapper>
        <S.Title>타인은</S.Title>
        <S.Title>천국이다</S.Title>
        <S.Description>새로운 인연을 만들어보세요!</S.Description>
      </S.TitleWrapper>
      {isLoginMode ? (
        <Login
          email={loginEmail}
          password={loginPassword}
          onChangeEmail={onChangeLoginEmail}
          onChangePassword={onChangeLoginPassword}
          onClickLoginModeAnchor={onClickLoginModeAnchor(false)}
          onLogin={onLogin}
        />
      ) : (
        <SignUp
          email={signupEmail}
          password={signupPassword}
          onChangeEmail={onChangeSignupEmail}
          onChangePassword={onChangeSignupPassword}
          onSignup={onSignup}
          onClickLoginModeAnchor={onClickLoginModeAnchor(true)}
        />
      )}
    </S.MainPage>
  );
};

export default Main;
