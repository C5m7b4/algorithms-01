class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    function insertHelper(node, value) {
      if (node === null) {
        this.root = new Node(value);
        return this.root;
      }

      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return node.left;
        } else {
          insertHelper(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(value);
          return node.right;
        } else {
          insertHelper(node.right, value);
        }
      }
    }

    return insertHelper.call(this, this.root, value);
  }
}

export default BinarySearchTree;
