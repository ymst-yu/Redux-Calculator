import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; // react と redux を連携
import App from "./App";
import reducers from "./redux/reducers";

const Store = createStore(reducers); // (reducersの中の)reducerが吐き出した状態の保管先。stateを一括で管理できるようになる。stateの倉庫みたいなもの。

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
