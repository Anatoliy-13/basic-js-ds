const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.dataStack = [];
  }
  push() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.dataStack[this.dataStack.length] = element;
  }

  pop() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let item = this.dataStack[this.dataStack.length - 1];
    this.dataStack.length -= 1;
    return item;
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.dataStack[this.dataStack.length - 1];
  }
}

module.exports = {
  Stack
};
