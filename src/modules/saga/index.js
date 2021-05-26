import { all } from "redux-saga/effects";
import signupSaga from "./signup";
import loginSaga from "./login";
import startMatch from "./match";

function* rootSaga() {
  yield all([signupSaga(), loginSaga(), startMatch()]);
}

export default rootSaga;
