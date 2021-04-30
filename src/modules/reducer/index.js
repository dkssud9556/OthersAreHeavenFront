import { combineReducers } from "redux";
import signupReducer from "./signup";

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default rootReducer;
