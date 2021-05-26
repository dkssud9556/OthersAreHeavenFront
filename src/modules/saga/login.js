import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN, loginFail, loginSuccess } from "../action/login";
import axios from "axios";
import config from "../../config";

function* requestLogin(action) {
  try {
    const { email, password } = action.payload;
    const result = yield call(axios.post, `${config.SERVER_URL}/auth`, {
      email,
      password,
    });
    alert("로그인 성공");
    localStorage.setItem("token", result.data.accessToken);
    yield put(loginSuccess(result.data.accessToken));
    action.payload.push("/main/match");
  } catch (e) {
    // TODO 오류 처리
    yield put(loginFail(e));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, requestLogin);
}

export default loginSaga;
