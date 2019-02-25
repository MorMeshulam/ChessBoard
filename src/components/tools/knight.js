import React, { Component } from "react";
import { knightRoleChecker } from "../../helpers/roles";

export class Knight extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return knightRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("Knight", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/knight.png")} alt="" />
      </div>
    );
  }
}
