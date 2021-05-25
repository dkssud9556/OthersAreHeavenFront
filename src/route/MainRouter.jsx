import React from "react";
import { Route } from "react-router-dom";
import MainContainer from "../containers/main/MainContainer";
import MatchContainer from "../containers/match";

const MainRouter = ({ match }) => {
  return (
    <>
      <Route exact={true} path={match.path} component={MainContainer} />
      <Route path={`${match.path}/match`} component={MatchContainer} />
    </>
  );
};

export default MainRouter;
