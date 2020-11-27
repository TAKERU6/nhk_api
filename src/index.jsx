import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const middleWare = [thunk];
const store = createStore(rootReducers, applyMiddleware(...middleWare));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
