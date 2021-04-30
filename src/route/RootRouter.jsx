import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainRouter from "./MainRouter";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <MainRouter />
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
