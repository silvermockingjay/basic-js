const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let outerLength = matrix.length;
  let innerLength = matrix[0].length;
  let arr = new Array();
  for (let i = 0; i < outerLength; i++) {
    arr.push([]);
  }
  let count;
  for (let i = 0; i < outerLength; i++) {
    for (let j = 0; j < innerLength; j++) {
      count = 0;
      if (j > 0) {
        if (
          i > 0 && matrix[i - 1][j - 1] === true ||
          matrix[i][j - 1] === true ||
          i < outerLength - 2 && matrix[i + 1][j - 1] === true
        ) { count++; }
      }
      if (j < innerLength - 2) {
        if (
          i > 0 && matrix[i - 1][j + 1] === true ||
          matrix[i][j + 1] === true ||
          i < outerLength - 2 && matrix[i + 1][j + 1] === true
        ) { count++; }
      }
      if (i > 0 && matrix[i - 1][j] === true) {
        count++;
      }
      if (i < outerLength - 2 && matrix[i + 1][j] === true) {
        count++;
      }
      arr[i][j] = count;
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
