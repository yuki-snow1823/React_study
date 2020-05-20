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
        {/* placeholderがバインドされているから、もし他で使う場合ここだけ変えられる */}
        <textarea className="main-form" maxLength="140" placeholder={this.placeholder} />
      </div>
    );
  }
}

export default Form;
