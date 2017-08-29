const assert = require('assert');
const arrayMatrixLib = require('x-array-matrix');
const createMatrix = arrayMatrixLib.createMatrix;

const checkStyle = require('xt-sc-chess-queen');

function matrixFillArray(matrix, array) {
  var e = 0;
  matrix.forEach(function(row, rowNum){
    row.forEach(function(col, colNum){
      matrix[rowNum][colNum] = array[e];
      e++;
    });
  });
  return matrix;
}

describe('Chessboard', function() {
  var elements;
  var matrix = createMatrix(8, 8);

  before(function() {
    browser.url('http://localhost:9090');
  });

  it('has 64 td elements', function() {
    elements = browser.elements('.chessboard__cell').value;
    assert(elements.length, 64);
  });

  it('highlights the possible moves when a td is clicked', function() {
    elements = browser.elements('.chessboard__cell').value;
    matrixFillArray(matrix, elements);
    var clickedElementId = matrix[3][4].ELEMENT;

    browser.elementIdClick(clickedElementId);

    var highlightedElements = browser.elements('.chessboard__cell--highlight').value;
    assert(highlightedElements.length, 28);
  });


  describe('normal design', function() {
    Object.keys(checkStyle.resolutions).forEach(key => {
      it('has the right styles for ' + key.split('-').join(' '), function () {
        checkStyle(browser, key, 'highlight', './docs/image-diffs', 5);
      });
    });
  });


  describe.skip('tilted design', function() {
    it('can be toggled', function() {
      browser.click('[name=tilt]');
      browser.pause(1000);
      var tiltedElement = browser.element('.chessboard--tilted');
      assert(tiltedElement.value);
    });

    Object.keys(checkStyle.resolutions).forEach(key => {
      it('has the right styles for ' + key.split('-').join(' '), function () {
        checkStyle(browser, key, 'tilted', './docs/image-diffs', 5, 600);
      });
    });
  });
});