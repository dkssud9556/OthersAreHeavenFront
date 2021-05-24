import { LOGIN_MODE } from "../../action/main";
import { GO_TO_MATCH } from "../../action/main/interface";

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
    case GO_TO_MATCH:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default MainReducer;
