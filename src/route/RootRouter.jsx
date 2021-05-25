import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainRouter from "./MainRouter";

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={MainRouter} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
