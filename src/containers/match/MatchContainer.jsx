import React from "react";
import Match from "../../components/match/Match";
import { useHistory } from "react-router-dom";

const MatchContainer = () => {
  const history = useHistory();

  const onStartMatching = () => {
    history.push("/main/matching");
  };

  const onClickLogout = () => {
    localStorage.removeItem("token");
    history.push("/main");
  };

  return (
    <Match onStartMatching={onStartMatching} onClickLogout={onClickLogout} />
  );
};

export default MatchContainer;
