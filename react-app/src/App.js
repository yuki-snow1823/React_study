import React, { Component } from "react";
// コンポーネントにストアを設定するためのconnectを読み込む
import { connect } from "react-redux";
import "./App.css";

// コンポーネント類の読み込み
import Memo from "./memo/Memo";
import AddForm from "./memo/AddForm";
import FindForm from "./memo/FindForm";
import DelForm from "./memo/DelForm";

// Appコンポーネント
class App extends Component {
  td = {
    width: "250px",
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Memo </h1>
        <AddForm />
        <hr />
        <table>
          {" "}
          <tbody>
            {" "}
            <tr>
              {/* tdは上にあるやつ */}
              <td style={this.td}>
                {" "}
                <FindForm />{" "}
              </td>{" "}
              <td style={this.td}>
                {" "}
                <DelForm />{" "}
              </td>{" "}
            </tr>
          </tbody>{" "}
        </table>{" "}
        <Memo />
      </div>
    );
  }
}

export default connect()(App);
