import { all } from "redux-saga/effects";
import signupSaga from "./signup";
import loginSaga from "./login";
import startMatch from "./match";
import goToMatching from "./match";

function* rootSaga() {
  yield all([signupSaga(), loginSaga(), startMatch(), goToMatching()]);
}

export default rootSaga;
