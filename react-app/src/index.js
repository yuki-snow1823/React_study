import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

// MemoStoreは指定した場所から読み込んでいる、というよりもstoreをメモストアって名前で呼び出している
// 呼び出されるのがmemostoreって名前のわけではない
import MemoStore from "./memo/Store";

// 表示をレンダリング
ReactDOM.render(
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
