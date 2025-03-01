const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;
  let ans = "";
  let count = 1;
  let i = 0
  for (i; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      ans += addToStr();
      count = 1;
    }
  }
  ans += addToStr();
  return ans;

  function addToStr() {
    if (count > 1) {
      return count + str[i];
    } 
    return str[i];
  }
}

module.exports = {
  encodeLine
};
