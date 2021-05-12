import React, { useState } from "react";
import * as S from "./style";
import Background from "../../assets/img/main-background.jpg";
import Login from "./login";
import SignUp from "./signup";

const Main = ({
  isLoginMode,
  setLoginMode,
  signupEmail,
  signupPassword,
  setSignupEmail,
  setSignupPassword,
  loginEmail,
  loginPassword,
  setLoginEmail,
  setLoginPassword,
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
          setLoginMode={setLoginMode(false)}
          email={loginEmail}
          password={loginPassword}
          setEmail={setLoginEmail}
          setPassword={setLoginPassword}
        />
      ) : (
        <SignUp
          setLoginMode={setLoginMode(true)}
          email={signupEmail}
          password={signupPassword}
          setEmail={setSignupEmail}
          setPassword={setSignupPassword}
        />
      )}
    </S.MainPage>
  );
};

export default Main;
