import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div>{this.props.header}</div>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
export default Header;
