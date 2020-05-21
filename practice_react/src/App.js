import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.doAction = this.doAction.bind(this);
  }
  render() {
    return (
      <div>
        <h1 className="index-title"> {this.title} </h1>{" "}
        <p> ここにツイート前の叫びを投稿します。 </p>{" "}
        <Form placeholder="これは初期値です。"> </Form>{" "}
        <div className="button-wrapper">
          <button className="submit-button" onClick={this.doAction}> 投稿 </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
