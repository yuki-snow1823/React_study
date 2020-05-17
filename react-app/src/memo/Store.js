import {
  createStore
} from 'redux';
// 必須

// 最初にストアの値を設定
const initData = {
  data: [{
    message: 'sample data',
    created: new Date()
  }],
  message: 'please type message:',
  mode: 'default',
  fdata: []
};

// レデューサー
// コンポーネントからきた処理をイベント名ごとに振り分ける
// state=名前+アクション
// 必ずstateを戻り値にすること
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション
// 上の仕分けに対応するアクション

// メモ追加のレデュース処理
function addReduce(state, action) {
  let data = {
    // ここがよくわからない
    // 最初に値を用意してる：宣言みたいな感じか？
    // 多分、actionに何かしらのデータがあるはず
    message: action.message,
    created: new Date()
  };
  console.log(action);
  // {type: "ADD", message: "aa"}が入ってた
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    // どこに返してるんだ？何しているんだ？
    data: newdata,
    message: 'Added!',
    mode: 'default',
    fdata: []
  };
}

// メモ検索のレデュース処理
function findReduce(state, action) {
  console.log(action.find);
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'delete "' + action.index + '":',
    mode: 'delete',
    fdata: []
  }
}

// アクションクリエーター

// メモ追加のアクション
// 【重要】ここで、dispatchしたときのactionを作ってる。
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text
  }
}

// メモ削除のアクション
export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num
  }
}

// メモ検索のアクション
export function findMemo(text) {
  return {
    type: 'FIND',
    find: text
  }
}

// ストアを作成
export default createStore(memoReducer);
