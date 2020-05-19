import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <input type="text"/>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
  }
  render() {
    return (
      <div>
        <h1 className="index-title">{this.title}</h1>
        <p>ここに愚痴を投稿します。</p>
        <input className="main-form" type="text"></input>
        <div className="button-wrapper">
          <button className="submit-button">投稿</button>
        </div>
        <Form></Form>
      </div>
    );
  }
}

export default App;
