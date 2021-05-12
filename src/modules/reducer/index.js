import { combineReducers } from "redux";
import signUpReducer from "./signup";
import mainReducer from "./main";
import LoginReducer from "./login";

const rootReducer = combineReducers({
  signup: signUpReducer,
  main: mainReducer,
  login: LoginReducer,
});

export default rootReducer;
