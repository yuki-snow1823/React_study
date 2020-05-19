import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
  }
  render() {
    return (
      <div>
        <h1 class="index-title">{this.title}</h1>
        <p>ここに愚痴を投稿します。</p>
        <input class="main-form" type="text"></input>
        <div class="button-wrapper">
          <button class="submit-button">投稿</button>
        </div>
      </div>
    );
  }
}

export default App;
