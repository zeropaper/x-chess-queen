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


function renderChessboard(tableElement) {
  var matrix = createMatrix(8, 8);
  var bwSwitch = false;

  matrix.forEach(function(rowArray, rowNum) {
    var rowElement = document.createElement('tr');
    bwSwitch = !bwSwitch;

    rowArray.forEach(function(column, columnNum) {
      var cellElement = document.createElement('td');

      cellElement.className = bwSwitch ? 'white' : 'black';
      bwSwitch = !bwSwitch;

      cellElement.addEventListener('click', function(event) {
        cellClicked(rowNum, columnNum, event);
      });

      rowElement.appendChild(cellElement);
      matrix[rowNum][columnNum] = cellElement;
    });

    tableElement.appendChild(rowElement);
  });

  return matrix;
}

function cellClicked(rowNum, columnNum, event) {
  removeHighlight();
  highlightRow(rowNum);
  highlightColumn(columnNum);
  highlightDiagonals(rowNum, columnNum);
}

var chessboardMatrix = renderChessboard(document.querySelector('table'));

function highlightRow(rowNum) {
  chessboardMatrix[rowNum][0].parentNode.classList.add('highlight');
}

function highlightColumn(columnNum) {
  chessboardMatrix.forEach(function(rowArray) {
    rowArray[columnNum].classList.add('highlight');
  });
}

function removeHighlight() {
  document.querySelectorAll('.highlight').forEach(function(element) {
    element.classList.remove('highlight');
  });
}

function highlightCell(rowNum, columnNum) {
  chessboardMatrix[rowNum][columnNum].classList.add('highlight');
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