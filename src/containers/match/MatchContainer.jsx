import React from "react";
import Match from "../../components/match/Match";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startMatch } from "../../modules/action/match";
import { connectSocket } from "../../lib/socket";

const socket = connectSocket();

const MatchContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onStartMatch = () => {
    dispatch(startMatch({ push: history.push, socket }));
  };

  return <Match onStartMatch={onStartMatch} />;
};

export default MatchContainer;
