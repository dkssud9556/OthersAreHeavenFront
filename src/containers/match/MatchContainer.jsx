import React from "react";
import Match from "../../components/match/Match";
import { useDispatch } from "react-redux";
import { goToMatching } from "../../modules/action/match";
import { useHistory } from "react-router-dom";

const MatchContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onStartMatching = () => {
    dispatch(goToMatching({ push: history.push }));
  };

  return <Match onStartMatching={onStartMatching} />;
};

export default MatchContainer;
