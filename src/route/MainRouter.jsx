import React from "react";
import { Route } from "react-router-dom";
import MainContainer from "../containers/main/MainContainer";
import MatchContainer from "../containers/match";
import MatchingContainer from "../containers/matching";

const MainRouter = ({ match }) => {
  return (
    <>
      <Route exact={true} path={match.path} component={MainContainer} />
      <Route
        exact={true}
        path={`${match.path}/match`}
        component={MatchContainer}
      />
      <Route
        exact={true}
        path={`${match.path}/matching`}
        component={MatchingContainer}
      />
    </>
  );
};

export default MainRouter;
