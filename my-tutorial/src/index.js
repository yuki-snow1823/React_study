import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//  3つのコンポーネント

//一つ目が四角
// class Square extends React.Component {
//   // stateの設定
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render() {
//     // ボタン一個だけレンダーしてくれる
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {/* 同義 <button className="square" onClick={() => alert('click')}></button> */}
//         {/* boardから来たpropsを表示 */}
//         {/* { this.props.value } から以下のように変更、クリック時の場所が入る*/}
//         {/* Square の render メソッド内に書かれた onClick ハンドラ内で this.setState を呼び出すことで、React に <button> がクリックされたら常に再レンダーするよう伝えることができます。 */}
//         {this.props.value}
//         {/* だからばつマークが表示される */}
//       </button>
//     );
//   }
// }

// これを関数コンポーネントにするとしたのようになる
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // 初期値の設定
  // 子コンポーネントにまるばつを交互にできるようにするため
  // Gameコンポーネントに移動
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // stateがsquaresという配列を初期値nullで持っている。
  //     squares: Array(9).fill(null),
  //     xIsNext: true, // 先行
  //   };
  // }

  handleClick(i) {
    // const squares = this.state.squares.slice();
    // squares[i] = "X";
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return; // これのおかげで、勝者が出るとゲームがもう終わってしまう。押してもreturnされるから。
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; // 順番によって出力を変える。
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  renderSquare(i) {
    // propsを渡している
    // valueが{this.state.squares[i]}になる
    return (
      <Square
        // value={this.state.squares[i]}
        // onClick={() => this.handleClick(i)}
        // propsを直接書き換えないようにするため
        // squareでonclickを呼ぶとprops.onClickはこれだから、呼び出される
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        // gameコンポーネントから受けとる
      />
    );
  }

  // boardのrender
  render() {
    // 文字を出してくれるところ
    const winner = calculateWinner(this.state.squares);
    let status; // 再代入する可能性があるからlet
    if (winner) {
      // 終わったら=(calculateWinnerがreturn squares[a];をリターンしたら)終わり
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    // ここが九個出力している原因の場所
    return (
      <div>
        {/* <div className="status">{status}</div> */}
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

// 一番の親
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// ヘルパー関数
// 勝者判定
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    // 同じものが連続しているか的な判定
  }
  return null;
}
