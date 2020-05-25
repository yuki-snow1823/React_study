// リアクトもちゃんと入れる
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.placeholder = props.placeholder;
    this.state = {
      message: "",
    };
    this.doAction = this.doAction.bind(this);
    this.doChange = this.doChange.bind(this);
  }
  doAction(e) {
    this.setState((state) => ({
      message: state.message,
    }));
    this.test = this.input;
  }
  doChange(e) {
    this.input = e.target.value;
  }
  render() {
    return (
      <div>
        {/* placeholderがバインドされているから、もし他で使う場合ここだけ変えられる */}
        <textarea
          className="main-form"
          maxLength="140"
          placeholder={this.placeholder}
          onChange={this.doChange}
        />
        <div className="button-wrapper">
          <button className="submit-button" onClick={this.doAction}>
            {" "}
            投稿{" "}
          </button>{" "}
        </div>{" "}
        <p>{ this.test }</p>
      </div>
    );
  }
}

export default Form;
