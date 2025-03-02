const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value) {
    value = String(value) || '( )';
    this.chain.push(`( ${value} )`);
    this.length += 1;
    return this;
  },

  removeLink(position) {
    if (Number.isFinite(position) && position > 0 && position <= this.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain.length = 0;
      this.length = 0;
      throw Error("You can't remove incorrect link!");
    }
    this.length -= 1;
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let string = this.chain.join('~~');
    this.chain.length = 0;
    this.length = 0;
    return string;
  }
};

module.exports = {
  chainMaker
};
