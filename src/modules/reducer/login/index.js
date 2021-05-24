import {
  LOGIN,
  LOGIN_EMAIL,
  LOGIN_FAIL,
  LOGIN_PASSWORD,
  LOGIN_SUCCESS,
} from "../../action/login";

const initState = {
  loginEmail: "",
  loginPassword: "",
};

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_EMAIL:
      return {
        ...state,
        loginEmail: action.payload,
      };
    case LOGIN_PASSWORD:
      return {
        ...state,
        loginPassword: action.payload,
      };
    case LOGIN:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default LoginReducer;
