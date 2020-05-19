// リアクトもちゃんと入れる
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.placeholder = props.placeholder
  }
  render() {
    return (
      <div>
        <input type="text" placeholder={this.placeholder} />
      </div>
    );
  }
}

export default Form;
