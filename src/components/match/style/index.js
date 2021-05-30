import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 50px;
  border: black solid 1px;
  box-shadow: gray 2px 2px 2px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const LogoutAnchor = styled.a`
  margin-right: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const MatchingButtonWrapper = styled.div`
  position: relative;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchingButton = styled.button`
  width: 75%;
  height: 70%;
  border: black solid 1px;
  background-color: #f6f8fa;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const MatchingText = styled.p`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 100px;
`;
