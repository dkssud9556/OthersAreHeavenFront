import React from "react";
import Match from "../../components/match/Match";
import { useHistory } from "react-router-dom";

const MatchContainer = () => {
  const history = useHistory();

  const onStartMatching = () => {
    history.push("/main/matching");
  };

  return <Match onStartMatching={onStartMatching} />;
};

export default MatchContainer;
