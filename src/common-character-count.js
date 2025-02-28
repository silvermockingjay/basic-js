const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ans = 0;
  let charInS1 = new Map();
  let charInS2 = new Map();

  for (let s of s1) {
    charInS1.set(s, (charInS1.get(s) || 0) + 1);
  }

  for (let s of s2) {
    charInS2.set(s, (charInS2.get(s) || 0) + 1);
  }
  
  charInS1.forEach((value, key) => {
    if (charInS2.has(key)) {
      ans += Math.min(charInS1.get(key), charInS2.get(key));
    }
  })
  return ans;
}

module.exports = {
  getCommonCharacterCount
};
