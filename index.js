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
}

function cellClicked(rowNum, columnNum, event) {
  highlightRow(rowNum);
}

var chessboarMatrix = renderChessboard(document.querySelector('table'));

function highlightRow(rowNum) {
  chessboarMatrix[rowNum].parentNode.classList.add('highlight');
}