import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
  }
  render() {
    return (
      <div>
        <h1 className="index-title"> {this.title} </h1>{" "}
        <p> ここにツイート前の叫びを投稿します。 </p>{" "}
        <Form placeholder="これは初期値です。"> </Form>{" "}
        <div className="button-wrapper">
          <button className="submit-button"> 投稿 </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
