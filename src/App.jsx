import React from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import Main from "./components/main/Main";
import store from "./modules/store";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
}
