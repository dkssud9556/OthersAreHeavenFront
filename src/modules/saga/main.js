import { getContext, takeEvery } from "redux-saga/effects";
import { GO_TO_MATCH } from "../action/main/interface";

function* goToMatch() {
  const history = yield getContext("history");
  history.push("/match");
}

export default function* goToMatchSaga() {
  yield takeEvery(GO_TO_MATCH, goToMatch);
}
