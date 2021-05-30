import { all } from "redux-saga/effects";
import signupSaga from "./signup";
import loginSaga from "./login";

function* rootSaga() {
  yield all([signupSaga(), loginSaga()]);
}

export default rootSaga;
