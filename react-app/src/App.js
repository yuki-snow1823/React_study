import React, { Component } from "react";
import Rect from "./Rect";
import "./App.css";

class App extends Component {
  input = "";

  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  };

  constructor(props) {
    super(props);
    this.state = {
      message: "type your name:",
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event) {
    alert(event.target.value + "は長すぎます。(最大10文字)");
  }

  render() {
    return (
      <div>
        <h1> React </h1> <h2> {this.state.message} </h2>{" "}
        <Message maxlength="10" onCheck={this.doCheck} />{" "}
      </div>
    );
  }
}

class Message extends Component {
  inputStyle = {
    fontSize: "12pt",
    padding: "5px",
  };

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  // 値が変わるたびにここが作動する、onChangeはinputの元々ある属性。
  // で。はみ出た瞬間onCheckにバインドされているeが発動する。
  // 何かというと
    // doCheck(event) {
    //   alert(event.target.value + "は長すぎます。(最大10文字)");
    // }

    // render() {
    //   return ( <
    //     div >
    //     <
    //     h1 > React < /h1> <h2> {this.state.message} </h2 > {
    //       " "
    //     } <
    //     Message maxlength = "10"
    //     onCheck = {
    //       this.doCheck　この部分。
    //     }
    //     />{" "} <
    //     /div>
    //   );
    // }
    // }
  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return (
      <input type="text" style={this.inputStyle} onChange={this.doChange} />
    );
  }
}

export default App;
