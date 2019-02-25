import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Queen, King, Rook, Knight, Bishop, Pawn } from "./tools";
import { switchColor } from "../helpers/roles";

import "../App.css";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: props.board,
      selectedTool: null,
      currentPosition: null,
      canMove: null
    };

    this.selectTool = this.selectTool.bind(this);
    this.moveTool = this.moveTool.bind(this);
  }

  selectTool(selectedTool, currentPosition, canMove) {
    this.setState({ selectedTool, currentPosition, canMove });
    // alert(`${selectedTool}:${JSON.stringify(currentPosition)}`);
  }

  moveTool(nextPosition) {
    const { board, selectedTool, currentPosition, canMove } = this.state;

    if (!selectedTool) return;
    if (board[nextPosition.rowId][nextPosition.colId]) {
      alert("the selected position not available");
      return;
    }
    const check = canMove(currentPosition, nextPosition);
    if (!check) {
      alert(`you cannt move ${selectedTool} to this position`);
      return;
    }

    const { rowId, colId } = currentPosition;
    const toolToMove = board[rowId][colId];

    board[nextPosition.rowId][nextPosition.colId] = toolToMove;
    board[rowId][colId] = null;
    this.setState({ board, selectedTool: null, currentPosition: null });
  }

  renderTool(key, position) {
    switch (key) {
      case "p":
        return <Pawn onPress={this.selectTool} position={position} />;
      case "b":
        return <Bishop onPress={this.selectTool} position={position} />;
      case "k":
        return <Knight onPress={this.selectTool} position={position} />;
      case "r":
        return <Rook onPress={this.selectTool} position={position} />;
      case "kg":
        return <King onPress={this.selectTool} position={position} />;
      case "q":
        return <Queen onPress={this.selectTool} position={position} />;

      default:
        return (
          <div
            className={"empty"}
            onClick={() => {
              this.moveTool(position);
            }}
          />
        );
    }
  }

  renderBoard(board, currentPosition) {
    const boardData = [];
    let type = "a";
    let rowId = 0,
      colId = 0;
    let selectToolStyle = "";

    for (let row of board) {
      const cols = [];
      colId = 0;
      type = switchColor(type);

      for (let key of row) {
        if (
          currentPosition &&
          currentPosition.rowId === rowId &&
          currentPosition.colId === colId
        ) {
          selectToolStyle = "selected";
        }

        cols.push(
          <Col key={`${rowId}:${colId}`}>
            <div className={`cell cell${type} ${selectToolStyle}`}>
              {this.renderTool(key, { rowId, colId })}
            </div>
          </Col>
        );
        colId++;
        selectToolStyle = "";
        type = switchColor(type);
      }

      boardData.push(
        <Row key={rowId++} className="row">
          {cols}
        </Row>
      );
    }

    return boardData;
  }

  render() {
    const { board, currentPosition } = this.state;
    return this.renderBoard(board, currentPosition);
  }
}
