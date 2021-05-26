import React from "react";
import { Provider } from "react-redux";
import store from "./modules/store";
import GlobalStyle from "./globalStyle";
import RootRouter from "./route";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
};

export default App;
