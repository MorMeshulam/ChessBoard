import React, { Component } from "react";
import { rookRoleChecker } from "../../helpers/roles";

export class Rook extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return rookRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("Rook", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/rook.png")} alt="" />
      </div>
    );
  }
}
