import { combineReducers } from "redux";
import signUpReducer from "./signup";
import mainReducer from "./main";
import LoginReducer from "./login";
import MatchReducer from "./match";
import MatchingReducer from "./matching";

const rootReducer = combineReducers({
  signup: signUpReducer,
  main: mainReducer,
  login: LoginReducer,
  match: MatchReducer,
  matching: MatchingReducer,
});

export default rootReducer;
