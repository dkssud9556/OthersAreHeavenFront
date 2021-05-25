import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import rootReducer from "../reducer";
import rootSaga from "../saga";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export default store;
