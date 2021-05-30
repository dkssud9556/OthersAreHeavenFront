import { LOGIN_MODE } from "../../action/main";

const initState = {
  isLoginMode: false,
  token: localStorage.getItem("token"),
};

const MainReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_MODE:
      return {
        ...state,
        isLoginMode: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default MainReducer;
