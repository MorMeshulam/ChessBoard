import React, { Component } from "react";

import "./App.css";
import Board from "./components/board";

class App extends Component {
  state = {
    data: [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["r", "k", "b", "q", "kg", "b", "k", "r"]
    ]
  };

  render() {
    return (
      <div className="App">
        <Board board={this.state.data} />
      </div>
    );
  }
}

export default App;
