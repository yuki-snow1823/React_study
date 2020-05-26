import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Form from "./Form";

// ステートのマッピング(何をしている？/後で呼び出しているが)
function mappingState(state) {
  return state;
}

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
  }
// formコンポーネントのstateだけこっちに置くことは可能か？
  render() {
    return (
      <div>
        <h1 className="index-title"> {this.title} </h1>{" "}
        <p> ここへツイート前に投稿します。 </p>{" "}
        <Form placeholder="これは初期値です。"> </Form>{" "}
      </div>
    );
  }
}
App = connect()(App);
export default App;
