import { takeEvery } from "redux-saga/effects";
import { START_MATCH } from "../action/match";

function* requestStartMatch(action) {
  console.log(action.payload.socket);
  yield action.payload.socket.emit("MATCH");
  action.payload.push("/main/matching");
}

function* startMatch() {
  yield takeEvery(START_MATCH, requestStartMatch);
}

export default startMatch;
