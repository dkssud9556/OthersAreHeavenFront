import { SIGNUP_EMAIL, SIGNUP_PASSWORD } from "../../action/signup";

const initState = {
  signupEmail: "",
  signupPassword: "",
};

const SignUpReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_EMAIL: {
      return {
        ...state,
        signupEmail: action.payload,
      };
    }
    case SIGNUP_PASSWORD: {
      return {
        ...state,
        signupPassword: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
