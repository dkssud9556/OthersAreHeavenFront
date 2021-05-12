import React from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import store from "./modules/store";
import RootRouter from "./route";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
}
