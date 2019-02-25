import React, { Component } from "react";
import { bishopRoleChecker } from "../../helpers/roles";

export class Bishop extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return bishopRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("Bishop", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/bishop.png")} alt="" />
      </div>
    );
  }
}
