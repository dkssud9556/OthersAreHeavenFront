import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import config from "../../config";
import { setLoginMode } from "../action/main";
import { SIGNUP, signupFail, signupSuccess } from "../action/signup";

function* requestSignup(action) {
  try {
    console.log(action);
    yield call(axios.post, `${config.SERVER_URL}/auth/sign-up`, action.payload);
    yield put(signupSuccess());
    alert("회원가입 성공");
    yield put(setLoginMode(true));
  } catch (e) {
    // TODO 오류 처리
    yield put(signupFail(e));
  }
}

function* signupSaga() {
  yield takeEvery(SIGNUP, requestSignup);
}

export default signupSaga;
