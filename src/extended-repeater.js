const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = [];
  let repeatedAddition;
  let stringWithAddition = str;
  let finalStringArray = [];
  let ans;

  options.additionSeparator = options.additionSeparator || '|';
  options.separator = options.separator || '+';

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (options.hasOwnProperty("addition")) {
    options.addition = String(options.addition);
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition.push(options.addition);
      }
      repeatedAddition = addition.join(options.additionSeparator);
      stringWithAddition += repeatedAddition;
    } else {
      stringWithAddition += options.addition; 
    }
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      finalStringArray.push(stringWithAddition);
    }
    ans = finalStringArray.join(options.separator);
  } else {
    ans = stringWithAddition;
  }
  return ans;
}

module.exports = {
  repeater
};
