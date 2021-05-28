import { takeEvery } from "redux-saga/effects";
import { GO_TO_MATCHING } from "../action/match";

function* requestGoToMatching(action) {
  action.payload.push("/main/matching");
}

function* goToMatching() {
  yield takeEvery(GO_TO_MATCHING, requestGoToMatching);
}

export default goToMatching;
