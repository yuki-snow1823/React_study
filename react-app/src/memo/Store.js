import {
  createStore
} from 'redux';
// 必須

// 最初にステートの値を設定
const initData = {
  data: [],
  message: 'please type message:',
  mode: 'default',
  fdata: []
};

// レデューサー
// コンポーネントからきた処理をイベント名ごとに振り分ける
// state=上のデータ+アクション

// で、各アクションごとにデータ＋アクションの引数
// 必ずstateを戻り値にすること
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      console.log(state); // typeとメッセージが入っている
      console.log(action); // ごちゃついたものが入っている
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
// 実際に何をするかの部分

function addReduce(state, action){
  let d = new Date();
  let f = d.getHours() + ':' + d.getMinutes()
    + ':' + d.getSeconds();
  let data = {
    message:action.message,
    created:f
  };
  // reduxの特性のためにわざわざこうしている
  // 中身を動的に書き換えている
  let newdata = state.data.slice();
  // 先頭に追加する、最後に追加はpush
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode:'default',
    fdata:[]
  };
  // 追加したものを入れて、返している
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
