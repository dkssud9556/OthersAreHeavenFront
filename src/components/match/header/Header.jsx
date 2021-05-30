import React from "react";
import * as S from "../style";

const Header = ({ onClickLogout }) => {
  return (
    <S.Header>
      <S.LogoutAnchor onClick={onClickLogout}>로그아웃</S.LogoutAnchor>
    </S.Header>
  );
};

export default Header;
