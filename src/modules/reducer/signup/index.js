import { EMAIL, PASSWORD } from "../../action/signup";

const initState = {
  email: "",
  password: "",
};

const SignUpReducer = (state = initState, action) => {
  switch (action.type) {
    case EMAIL: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
  }
};

export default SignUpReducer;
