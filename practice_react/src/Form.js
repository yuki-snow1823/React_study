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
  }
  doAction(e) {
    this.setState((state) => ({
      counter: state.message,
      // Formコンポーネントのstateを取得したい
    }));
  }
  render() {
    return (
      <div>
        {/* placeholderがバインドされているから、もし他で使う場合ここだけ変えられる */}
        <textarea
          className="main-form"
          maxLength="140"
          placeholder={this.placeholder}
        />
        <div className="button-wrapper">
          <button className="submit-button" onClick={this.doAction}>
            {" "}
            投稿{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Form;
