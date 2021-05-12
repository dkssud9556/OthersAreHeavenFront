import { LOGIN_EMAIL, LOGIN_PASSWORD } from "../../action/login";

const initState = {
  loginEmail: "",
  loginPassword: "",
};

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_EMAIL: {
      return {
        ...state,
        loginEmail: action.payload,
      };
    }
    case LOGIN_PASSWORD: {
      return {
        ...state,
        loginPassword: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
