import styled from "styled-components";

export const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-size: cover;
  display: flex;
  font-family: "NanumSquare", sans-serif;
`;

export const TitleWrapper = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  width: 600px;
`;

export const Title = styled.h1`
  padding-top: 15px;
  font-size: 100px;
  font-weight: bold;
  color: black;
`;

export const Description = styled.div`
  font-size: 50px;
  padding-top: 20px;
`;

export const AccountWrapper = styled.div`
  width: 600px;
  height: 80vh;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  margin-top: 10vh;
  margin-left: 45vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AccountTitle = styled.h1`
  font-size: 65px;
  font-weight: bold;
`;

export const AccountTitleWrapper = styled.div`
  margin-top: 55px;
`;

export const AccountInputWrapper = styled.div`
  margin-top: 30px;
  width: 80%;
`;

export const AccountModeChangeAnchor = styled.a`
  margin-top: 10px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const EmailSendButton = styled.button`
  margin-top: 40px;
  border-radius: 32px;
  width: 40%;
  outline: none;
  background: white;
  border: 1px solid #707070;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const EmailVerificationWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const EmptySpaceBetweenInputAndButton = styled.div`
  width: 5%;
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
