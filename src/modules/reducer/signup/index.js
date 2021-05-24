import { SIGNUP_EMAIL, SIGNUP_PASSWORD } from "../../action/signup";
import {
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "../../action/signup/interface";

const initState = {
  signupEmail: "",
  signupPassword: "",
};

const SignUpReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL:
      return {
        ...state,
        signupEmail: action.payload,
      };
    case SIGNUP_PASSWORD:
      return {
        ...state,
        signupPassword: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
