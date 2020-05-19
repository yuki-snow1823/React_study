import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 class="index-title">投稿ページ</h1>
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
