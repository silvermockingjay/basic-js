const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
        case '--double-next':
          if (arr[i + 1]) {
            res.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
            res.push(arr[i - 1]);
          }
          break;
        case '--discard-prev':
          if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
            res.pop();
          }
          break;
        case '--discard-next':
          if (arr[i + 1]) {
            i++;
          }
          break;
        default:
          res.push(arr[i]);
          break;
      }
    }
    return res;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
