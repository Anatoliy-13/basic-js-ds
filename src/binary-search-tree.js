const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addNode(this.rootNode, data);
      function addNode(node, data) {
         if (!node) {
            return new Node(data);
         }

         if (node.data === data) {
            return node;
         }

         if (node.data > data) {
            node.left = addNode(node.left, data)
         } else {
            node.right = addNode(node.right, data)
         }
         return node;
      }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return checkNode(this.rootNode, data);
      function checkNode(node, data) {
         if (!node) {
            return false;
         }
         if (node.data === data) {
            return true;
         }
         return data < node.data ? checkNode(node.left, data) : checkNode(node.right, data);
      }
  }

  find( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findNode(this.rootNode, data);
      function findNode(node, data) {
         if (!node) {
            return null;
         }
         if (node.data === data) {
            return node;
         }
         return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
      }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);

      function removeNode(node, data) {
         if (!node) {
            return null;
         }

         if (node.data > data) {
            node.left = removeNode(node.left, data);
            return node;
         } else if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
         } else {
            if (!node.left && !node.right) {
               return null;
            }

            if (!node.left) {
               node = node.right;
               return node;
            }

            if (!node.right) {
               node = node.left;
               return node;
            }

            let minFromRight = node.right;
            while (minFromRight.left) {
               minFromRight = minFromRight.left;
            }
            node.data = minFromRight.data;

            node.right = removeNode(node.right, minFromRight.data);

            return node;
         }
      }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) {
      return;
   }
   let node = this.rootNode;
   while (node.left) {
      node = node.left;
   }
   return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) {
      return;
   }

   let node = this.rootNode;
   while (node.right) {
      node = node.right;
   }

   return node.data;
  }
}

module.exports = {
  BinarySearchTree
};