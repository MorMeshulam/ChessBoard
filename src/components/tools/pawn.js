import React, { Component } from "react";
import { pawnRoleChecker } from "../../helpers/roles";

export class Pawn extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return pawnRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("Pawn", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/pawn.png")} alt="" />
      </div>
    );
  }
}
