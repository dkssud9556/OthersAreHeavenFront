import React from "react";
import * as S from "./style";

const Input = ({ placeholder, value, onChange, type }) => {
  return (
    <S.AccountInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
