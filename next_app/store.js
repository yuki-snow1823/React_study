import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// ステート初期値
const initial = {
  message: "START",
  count: 0,
};

// レデューサー
function counterReducer(state = initial, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        message: "INCREMENT",
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        message: "DECREMENT",
        count: state.count - 1,
      };
    case "RESET":
      return {
        message: "RESET",
        count: initial.count,
      };
    default:
      return state;
  }
}

// initStore関数（redux-store.jsで必要）
// ミドルウェアを使うと言う記述をしている
export function initStore(state = initial) {
  return createStore(counterReducer, state, applyMiddleware(thunkMiddleware));
}
