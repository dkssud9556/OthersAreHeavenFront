import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "../containers/main/MainContainer";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
