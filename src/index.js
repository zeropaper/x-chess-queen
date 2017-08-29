/*jshint esversion: 6*/
function createMatrix(rowsCount, columnsCount) {
  var matrix = [];

  for (var rowNum = 0; rowNum < rowsCount; rowNum++) {
    var row = [];
    // // alternatively...
    // matrix[rowNum] = [];
    for (var colNum = 0; colNum < columnsCount; colNum++) {
      row.push(0);
      // // alternatively...
      // matrix[rowNum].push(0);
    }

    matrix.push(row);
  }

  return matrix;
}


function renderChessboard(chessboardElement) {
  var matrix = createMatrix(8, 8);
  var bwSwitch = false;
  // var figuresHolderElement = chessboardElement.querySelector('.figures');
  var tableElement = chessboardElement.querySelector('div');
  tableElement.className = 'chessboard__table';

  matrix.forEach(function(rowArray, rowNum) {
    var rowElement = document.createElement('div');
    rowElement.className = 'chessboard__row';
    bwSwitch = !bwSwitch;

    rowArray.forEach(function(column, columnNum) {
      var cellElement = document.createElement('div');

      cellElement.className = bwSwitch ? 'chessboard__cell' : 'chessboard__cell chessboard__cell--black';
      bwSwitch = !bwSwitch;

      cellElement.addEventListener('click', function(event) {
        cellClicked(rowNum, columnNum, event);
      });

      rowElement.appendChild(cellElement);
      matrix[rowNum][columnNum] = cellElement;


      // var figureNameClass;
      // if (rowNum === 0) {
      //   figureNameClass = 'figure--black__';
      // }
      // else if (rowNum === 1) {
      //   figureNameClass = 'figure--black__pawn';
      // }
      // else if (rowNum === 6) {
      //   figureNameClass = 'figure--white__pawn';
      // }
      // else if (rowNum === 7) {
      //   figureNameClass = 'figure--white__';
      // }

      // if (rowNum === 0 || rowNum === 7) {
      //   if (columnNum === 0 || columnNum === 7) {
      //     figureNameClass += 'rook';
      //   }
      //   else if (columnNum === 1 || columnNum === 6) {
      //     figureNameClass += 'knight';
      //   }
      //   else if (columnNum === 2 || columnNum === 5) {
      //     figureNameClass += 'bishop';
      //   }
      //   else if (columnNum === 3) {
      //     figureNameClass += 'king';
      //   }
      //   else {
      //     figureNameClass += 'queen';
      //   }
      // }

      // if (figureNameClass) {
      //   var figureElement = document.createElement('div');
      //   figureElement.className = 'figure figure--on-' + cellElement.className + ' figure__position--' + rowNum + '-' + columnNum + ' ' + figureNameClass;
      //   figuresHolderElement.appendChild(figureElement);
      // }
    });

    tableElement.appendChild(rowElement);
  });

  return matrix;
}

// function cellFigure(rowNum, columnNum) {
//   return document.querySelector('.figure__position--' + rowNum + '-' + columnNum);
// }

// function selectFigure(figureElement) {
//   var selectedFigure = document.querySelector('.figure--selected');
//   if (selectedFigure) {
//     selectedFigure.classList.remove('figure--selected');
//   }
//   figureElement.classList.add('figure--selected');
// }

// function moveFigure(figureElement, toRowNum, toColumnNum) {
//   var positionClass;
//   figureElement.classList.forEach(function(name) {
//     if (name.indexOf('figure__position--') === 0) positionClass = name;
//   });
//   figureElement
//     .classList
//       .remove(positionClass);
//   figureElement
//     .classList
//       .add('figure__position--' + toRowNum + '-' + toColumnNum);
// }

function cellClicked(rowNum, columnNum, event) {
  // var figureElement = cellFigure(rowNum, columnNum);
  // if (figureElement) {
  //   selectFigure(figureElement);
  // }
  // else {
  //   moveFigure(document.querySelector('.figure--selected'), rowNum, columnNum);
  // }
  removeHighlight();
  highlightRow(rowNum);
  highlightColumn(columnNum);
  highlightDiagonals(rowNum, columnNum);
}

var chessboardMatrix = renderChessboard(document.querySelector('.chessboard'));

function highlightRow(rowNum) {
  chessboardMatrix[rowNum][0].parentNode.childNodes.forEach(function(cell) {
    cell.classList.add('chessboard__cell--highlight');
  });
}

function highlightColumn(columnNum) {
  chessboardMatrix.forEach(function(rowArray) {
    rowArray[columnNum].classList.add('chessboard__cell--highlight');
  });
}

function removeHighlight() {
  document.querySelectorAll('.chessboard__cell--highlight').forEach(function(element) {
    element.classList.remove('chessboard__cell--highlight');
  });
}

function highlightCell(rowNum, columnNum) {
  chessboardMatrix[rowNum][columnNum].classList.add('chessboard__cell--highlight');
}

function highlightDiagonals(rowNum, columnNum) {
  var x;
  var y;
  var c;
  var mx = chessboardMatrix.length;
  var my = chessboardMatrix[0].length;

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum + c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum + c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum - c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum - c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }
}

document.querySelector('[name="tilt"]').addEventListener('change', function(event) {
  var chessboardElement = document.querySelector('.chessboard');
  chessboardElement.classList[event.target.checked ? 'add' : 'remove']('chessboard--tilted');
});