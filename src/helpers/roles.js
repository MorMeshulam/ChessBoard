export const bishopRoleChecker = (currentPosition, nextPosition) => {
  ///////////////case 1
  if (
    currentPosition.colId < nextPosition.colId &&
    currentPosition.rowId > nextPosition.rowId
  ) {
    let colId = nextPosition.colId;
    let rowId = nextPosition.rowId;

    while (currentPosition.colId < colId) {
      colId--;
      rowId++;

      if (currentPosition.colId === colId && currentPosition.rowId === rowId)
        return true;
    }
  }
  ///////////////case 2
  if (
    currentPosition.colId > nextPosition.colId &&
    currentPosition.rowId < nextPosition.rowId
  ) {
    let colId = nextPosition.colId;
    let rowId = nextPosition.rowId;

    while (currentPosition.colId > colId) {
      colId++;
      rowId--;

      if (currentPosition.colId === colId && currentPosition.rowId === rowId)
        return true;
    }
  }

  ///////////////case 3
  if (
    currentPosition.colId > nextPosition.colId &&
    currentPosition.rowId > nextPosition.rowId
  ) {
    let colId = nextPosition.colId;
    let rowId = nextPosition.rowId;

    while (currentPosition.colId > colId) {
      colId++;
      rowId++;

      if (currentPosition.colId === colId && currentPosition.rowId === rowId)
        return true;
    }
  }
  ///////////////case 3
  if (
    currentPosition.colId < nextPosition.colId &&
    currentPosition.rowId < nextPosition.rowId
  ) {
    let colId = nextPosition.colId;
    let rowId = nextPosition.rowId;

    while (currentPosition.colId < colId) {
      colId--;
      rowId--;

      if (currentPosition.colId === colId && currentPosition.rowId === rowId)
        return true;
    }
  }

  return false;
};

export const pawnRoleChecker = (currentPosition, nextPosition) => {
  if (currentPosition.colId === nextPosition.colId)
    if (currentPosition.rowId === nextPosition.rowId + 1) {
      return true;
    }
  return false;
};

export const knightRoleChecker = (currentPosition, nextPosition) => {
  ////////2 from right
  if (
    currentPosition.colId === nextPosition.colId + 2 &&
    (currentPosition.rowId === nextPosition.rowId + 1 ||
      currentPosition.rowId === nextPosition.rowId - 1)
  ) {
    return true;
  }

  ////////2 from left
  if (
    currentPosition.colId === nextPosition.colId - 2 &&
    (currentPosition.rowId === nextPosition.rowId + 1 ||
      currentPosition.rowId === nextPosition.rowId - 1)
  ) {
    return true;
  }

  ////////2 from up
  if (
    currentPosition.rowId === nextPosition.rowId - 2 &&
    (currentPosition.colId === nextPosition.colId + 1 ||
      currentPosition.colId === nextPosition.colId - 1)
  ) {
    return true;
  }

  ////////2 from down
  if (
    currentPosition.rowId === nextPosition.rowId + 2 &&
    (currentPosition.colId === nextPosition.colId + 1 ||
      currentPosition.colId === nextPosition.colId - 1)
  ) {
    return true;
  }

  return false;
};

export const rookRoleChecker = (currentPosition, nextPosition) => {
  if (
    currentPosition.colId === nextPosition.colId ||
    currentPosition.rowId === nextPosition.rowId
  ) {
    return true;
  }
  return false;
};

export const kingRoleChecker = (currentPosition, nextPosition) => {
  ////////up
  if (
    currentPosition.colId === nextPosition.colId &&
    currentPosition.rowId === nextPosition.rowId + 1
  ) {
    return true;
  }

  ////////down
  if (
    currentPosition.colId === nextPosition.colId &&
    currentPosition.rowId === nextPosition.rowId - 1
  ) {
    return true;
  }

  ////////left
  if (
    currentPosition.colId === nextPosition.colId - 1 &&
    currentPosition.rowId === nextPosition.rowId
  ) {
    return true;
  }

  ////////right
  if (
    currentPosition.colId === nextPosition.colId + 1 &&
    currentPosition.rowId === nextPosition.rowId
  ) {
    return true;
  }

  ////////slant1
  if (
    currentPosition.colId === nextPosition.colId - 1 &&
    currentPosition.rowId === nextPosition.rowId - 1
  ) {
    return true;
  }

  ////////slant2
  if (
    currentPosition.colId === nextPosition.colId + 1 &&
    currentPosition.rowId === nextPosition.rowId + 1
  ) {
    return true;
  }

  ////////slant3
  if (
    currentPosition.colId === nextPosition.colId - 1 &&
    currentPosition.rowId === nextPosition.rowId + 1
  ) {
    return true;
  }

  ////////slant2
  if (
    currentPosition.colId === nextPosition.colId + 1 &&
    currentPosition.rowId === nextPosition.rowId - 1
  ) {
    return true;
  }

  return false;
};

export const queenRoleChecker = (currentPosition, nextPosition) => {
  if (
    bishopRoleChecker(currentPosition, nextPosition) ||
    rookRoleChecker(currentPosition, nextPosition)
  ) {
    return true;
  }

  return false;
};

export const switchColor = key => {
  return key === "a" ? "b" : "a";
};
