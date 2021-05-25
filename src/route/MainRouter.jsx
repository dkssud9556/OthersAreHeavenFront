import React from "react";
import { Route } from "react-router-dom";
import MainContainer from "../containers/main/MainContainer";
import Matching from "../components/matching/Matching";

const MainRouter = ({ match }) => {
  return (
    <>
      <Route exact={true} path={match.path} component={MainContainer} />
      <Route path={`${match.path}/match`} component={Matching} />
    </>
  );
};

export default MainRouter;
