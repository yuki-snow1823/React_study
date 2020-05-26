import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 追加
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";


// ステートの値
let state_value = {
  counter: 0,
  message: "こんにちは",
};

// レデューサー
function counter(state = state_value, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        message: "増やしました。",
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        message: "減らしました。",
      };
    default:
      return state;
  }
}
// ストアを作成
let store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    {/* Provider(ストアを渡すもの)追加 */}
    <Provider store={store}> 
      <App title="投稿ページです！" />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
