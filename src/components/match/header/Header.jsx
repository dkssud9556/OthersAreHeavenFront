import React from "react";
import * as S from "../style";

const Header = ({ onClickLogout }) => {
  return (
    <S.Header>
      <S.LogoutAnchor onClick={onClickLogout}>๋ก๊ทธ์์</S.LogoutAnchor>
    </S.Header>
  );
};

export default Header;
