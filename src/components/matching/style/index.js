import styled from "styled-components";

export const ChatBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: white;
  position: absolute;
  overflow: scroll;
  top: 20px;
  left: 30px;
  border-radius: 12px;
`;

export const ChatSubmitWrapper = styled.form`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ChatInput = styled.input`
  width: 80%;
  padding: 20px;
  font-size: 35px;
  border: none;
  border-radius: 12px;
  outline: none;
`;

export const ChatSubmitButton = styled.button`
  width: 7%;
  font-size: 35px;
  background: crimson;
  border: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const ChatExitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 7%;
`;

export const FindNewUserButton = styled.button`
  font-size: 15px;
  padding: 6px;
  width: 100%;
  border: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
  background-color: gray;
`;

export const StopMatchingButton = styled.button`
  width: 100%;
  padding: 6px;
  font-size: 15px;
  border: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
  background-color: gray;
`;
