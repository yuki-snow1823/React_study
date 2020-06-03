import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//  3つのコンポーネント

//一つ目が四角
class Square extends React.Component {
  // stateの設定
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    // ボタン一個だけレンダーしてくれる
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {/* 同義 <button className="square" onClick={() => alert('click')}></button> */}
        {/* boardから来たpropsを表示 */}
        {/* { this.props.value } から以下のように変更、クリック時の場所が入る*/}
        {/* Square の render メソッド内に書かれた onClick ハンドラ内で this.setState を呼び出すことで、React に <button> がクリックされたら常に再レンダーするよう伝えることができます。 */}
        {this.props.value}
        {/* だからばつマークが表示される */}
      </button>
    );
  }
}

class Board extends React.Component {
  // 初期値の設定
  // 子コンポーネントにまるばつを交互にできるようにするため
  constructor(props) {
    super(props);
    this.state = {
      // stateがsquaresという配列を初期値nullで持っている。
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    // propsを渡している
    // valueが{this.state.squares[i]}になる
    return (
      <Square
        value={this.state.squares[i]}
        // propsを直接書き換えないようにするため
        // squareでonclickを呼ぶとprops.onClickはこれだから、呼び出される
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // 文字を出してくれるところ
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* 数字が入る直接の原因 */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
