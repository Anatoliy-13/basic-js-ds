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
  push() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    Stack.push(1)
  }

  pop() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Stack.length == 0)
    return "Underflow";
    return Stack.pop();
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return Stack(Stack.length - 1)
  }
}

module.exports = {
  Stack
};
