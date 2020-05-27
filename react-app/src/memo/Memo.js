import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";

class Memo extends Component {
  // コンポーネントも表示によって変える
  render() {
    let data;
    let n = 0;
    // switchを使って何をrenderするか分けられる
    switch (this.props.mode) { //に、関してケースを分けるってこと、modeはstateの中に入っている
      case "default": // それがdefaultなら
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;
      
      // 検索時は表示を変える
      case "find":
        data = this.props.fdata.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case "delete":
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      default:
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
    }
    return (
      <table>
        <tbody> {data} </tbody>
      </table>
    );
  }
}
export default connect((state) => state)(Memo);
