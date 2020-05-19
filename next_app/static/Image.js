import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.fname = "./static/" + props.fname;
    this.size = props.size + "px";
  }

  render() {
    return <img width={this.size} border="1" src={this.fname} />;
  }
}
export default Image;
