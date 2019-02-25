import React, { Component } from "react";
import { queenRoleChecker } from "../../helpers/roles";

export class Queen extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return queenRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("Queen", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/queen.png")} alt="" />
      </div>
    );
  }
}
