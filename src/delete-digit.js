const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let change = false;
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      change = true;
      arr.splice(i, 1);
      break;
    }
  }
  if (!change) {
    arr.pop();
  }
  ans = Number(arr.join(""));
  return ans;
}

module.exports = {
  deleteDigit
};
