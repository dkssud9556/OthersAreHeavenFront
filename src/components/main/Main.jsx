import React, { useState } from "react";
import * as S from "./style";
import Background from "../../assets/img/main-background.jpg";
import Login from "./Login";
import SignUp from "./SignUp";

const Main = () => {
  const [isLogin, setLogin] = useState(true);

  const changeSignUp = () => {
    setLogin(false);
  };

  const changeLogin = () => {
    setLogin(true);
  };

  return (
    <S.Container url={Background}>
      <S.TitleContainer>
        <S.Title>타인은</S.Title>
        <S.Title>천국이다</S.Title>
        <S.Description>새로운 인연을 만들어보세요!</S.Description>
      </S.TitleContainer>
      {isLogin ? (
        <Login changeSignUp={changeSignUp} />
      ) : (
        <SignUp changeLogin={changeLogin} />
      )}
    </S.Container>
  );
};

export default Main;
