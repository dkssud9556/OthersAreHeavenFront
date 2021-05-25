import { all } from "redux-saga/effects";
import signupSaga from "./signup";
import loginSaga from "./login";
import goToMatchSaga from "./main";

function* rootSaga() {
  yield all([signupSaga(), loginSaga(), goToMatchSaga()]);
}

export default rootSaga;
