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


function cellClicked(rowNum, columnNum, event) {}


function renderChessboard(tableElement) {
  var chessboardElement = document.createElement('table');

  var bwSwitch = false;
  createMatrix(8, 8).forEach(function(rowArray, rowNum) {
    var rowElement = document.createElement('tr');

    rowArray.forEach(function(column, columnNum) {
      var cellElement = document.createElement('td');

      cellElement.className = bwSwitch ? 'white' : 'black';
      bwSwitch = !bwSwitch;

      cellElement.addEventListener('click', function(event) {
        cellClicked(rowNum, columnNum, event);
      });

      rowElement.appendChild(cellElement);
    });

    tableElement.appendChild(rowElement);
  });
}

document.body.appendChild(document.querySelector('table'));