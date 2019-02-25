import React, { Component } from "react";
import { kingRoleChecker } from "../../helpers/roles";

export class King extends Component {
  state = {};

  canMove(currentPosition, nextPosition) {
    return kingRoleChecker(currentPosition, nextPosition);
  }

  render() {
    const { onPress, position } = this.props;

    return (
      <div
        onClick={() => {
          onPress("King", position, this.canMove);
        }}
      >
        <img className="tool" src={require("../../images/king.png")} alt="" />
      </div>
    );
  }
}
