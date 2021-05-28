import { takeEvery } from "redux-saga/effects";
import { START_MATCHING } from "../action/matching";

function* requestStartMatching(action) {
  action.payload.socket.emit("MATCH");
}

function* startMatching() {
  yield takeEvery(START_MATCHING, requestStartMatching);
}

export default startMatching;
