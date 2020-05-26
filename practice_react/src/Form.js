// リアクトもちゃんと入れる
import React, { Component } from "react";
import { connect } from "react-redux";


class Form extends Component {
  constructor(props) {
    super();
    this.placeholder = props.placeholder;
    this.state = {
      message: "",
      count: 0
    };
    this.doAction = this.doAction.bind(this);
    this.doChange = this.doChange.bind(this);
  }
  doAction(e) {
    if (e.shiftKey) {
      this.props.dispatch({ type: "DECREMENT" });
    } else {
      this.props.dispatch({ type: "INCREMENT" });
    }
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
        <p>{this.test}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
Form = connect()(Form);
export default Form;
