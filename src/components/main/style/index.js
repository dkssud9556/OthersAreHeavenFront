import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-size: cover;
  display: flex;
  font-family: "NanumSquare", sans-serif;
`;

export const TitleContainer = styled.div`
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

export const AccountContainer = styled.div`
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

export const AccountTitleContainer = styled.div`
  margin-top: 55px;
`;

export const AccountInputContainer = styled.div`
  margin-top: 30px;
  width: 80%;
`;

export const AccountInput = styled.input`
  font-size: 25px;
  margin-top: 40px;
  border-radius: 32px;
  padding: 10px;
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  outline: none;
  background: white;
  border: 1px solid #707070;
`;

export const AccountButtonContainer = styled.div`
  margin-top: 50px;
  width: 80%;
`;

export const AccountButton = styled.button`
  border-radius: 32px;
  height: 60px;
  box-sizing: border-box;
  width: 100%;
  font-size: 30px;
  outline: none;
  background: white;
  border: 1px solid #707070;
  &:hover {
    cursor: pointer;
  }
`;

export const AccountModeChangeButton = styled.div`
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

export const EmailVerificationContainer = styled.div`
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
