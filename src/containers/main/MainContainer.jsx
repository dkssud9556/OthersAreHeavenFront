import React from "react";
import Main from "../../components/main/Main";
import useMain from "../../util/hooks/main/useMain";
import useSignUp from "../../util/hooks/signup/useSignUp";
import useLogin from "../../util/hooks/login/useLogin";

const MainContainer = () => {
  const { state: mainState, setState: setMainState } = useMain();
  const { state: signupState, setState: setSignupState } = useSignUp();
  const { state: loginState, setState: setLoginState } = useLogin();
  return (
    <Main
      {...mainState}
      {...setMainState}
      {...signupState}
      {...setSignupState}
      {...loginState}
      {...setLoginState}
    />
  );
};

export default MainContainer;
