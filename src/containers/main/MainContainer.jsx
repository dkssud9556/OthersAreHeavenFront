import React from "react";
import Main from "../../components/main/Main";
import useMain from "../../util/hooks/main/useMain";
import useSignUp from "../../util/hooks/signup/useSignUp";
import useLogin from "../../util/hooks/login/useLogin";
import { useDispatch } from "react-redux";
import {
  setSignupEmail,
  setSignupPassword,
  signup,
} from "../../modules/action/signup";
import { setLoginMode } from "../../modules/action/main";
import {
  login,
  setLoginEmail,
  setLoginPassword,
} from "../../modules/action/login";

const MainContainer = () => {
  const { state: mainState } = useMain();
  const { state: signupState } = useSignUp();
  const { state: loginState } = useLogin();
  const dispatch = useDispatch();

  const onSignup = (e) => {
    e.preventDefault();
    const { signupEmail, signupPassword } = signupState;
    dispatch(signup({ email: signupEmail, password: signupPassword }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    const { loginEmail, loginPassword } = loginState;
    dispatch(login({ email: loginEmail, password: loginPassword }));
  };

  const onClickLoginModeAnchor = (mode) => () => {
    dispatch(setLoginMode(mode));
  };

  const onChangeSignupEmail = (e) => {
    dispatch(setSignupEmail(e.target.value));
  };

  const onChangeSignupPassword = (e) => {
    dispatch(setSignupPassword(e.target.value));
  };

  const onChangeLoginEmail = (e) => {
    dispatch(setLoginEmail(e.target.value));
  };

  const onChangeLoginPassword = (e) => {
    dispatch(setLoginPassword(e.target.value));
  };

  return (
    <Main
      {...mainState}
      {...signupState}
      {...loginState}
      onSignup={onSignup}
      onClickLoginModeAnchor={onClickLoginModeAnchor}
      onChangeSignupEmail={onChangeSignupEmail}
      onChangeSignupPassword={onChangeSignupPassword}
      onChangeLoginEmail={onChangeLoginEmail}
      onChangeLoginPassword={onChangeLoginPassword}
      onLogin={onLogin}
    />
  );
};

export default MainContainer;
