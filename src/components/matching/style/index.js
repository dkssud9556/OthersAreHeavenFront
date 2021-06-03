import styled from "styled-components";

export const ChatBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
`;

export const ChatSubmitWrapper = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChatInput = styled.input`
  width: 80%;
  height: 50%;
  padding-left: 10px;
  font-size: 35px;
  border: none;
  border-radius: 12px;
  outline: none;
`;

export const ChatSubmitButton = styled.button`
  width: 7%;
  height: 50%;
  font-size: 35px;
  background: #ffe936;
  border: none;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const ChatExitWrapper = styled.div`
  display: flex;
  height: 50%;
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

export const MatchingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Matching = styled.h1`
  font-size: 50px;
`;

export const ExitMatchingButton = styled.button`
  padding: 5px;
  border-radius: 12px;
  border: none;
  background-color: indianred;
  font-size: 20px;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const OppositeSpeechBubble = styled.div`
  position: relative;
  align-self: flex-start;
  padding: 10px;
  max-width: 50%;
  font-size: 20px;
  background: white;
  border-radius: 0.4em;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const MySpeechBubble = styled.div`
  position: relative;
  align-self: flex-end;
  padding: 10px;
  max-width: 50%;
  font-size: 20px;
  background: #ffe936;
  border-radius: 0.4em;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: #b3c8db;
  position: absolute;
  overflow: scroll;
`;

export const SystemSpeechBubble = styled.div`
  background-color: #93a5b3;
  margin-top: 20px;
  padding: 10px;
  border-radius: 24px;
  color: white;
`;
