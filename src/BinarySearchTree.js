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

  contains(value) {
    function containsHelper(node, value) {
      if (node === null) {
        return false;
      }

      if (node.value === value) {
        return true;
      } else if (value < node.value && node.left !== null) {
        return containsHelper(node.left, value);
      } else if (value > node.value && node.right !== null) {
        return containsHelper(node.right, value);
      }
      return false;
    }
    return containsHelper.call(this, this.root, value);
  }

  min(node = null) {
    if (node === null) {
      return;
    }

    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max(node) {
    debugger;
    if (node === null) {
      return null;
    }
    if (node.right === null) {
      return node;
    } else {
      return this.max(node.right);
    }
  }
}

export default BinarySearchTree;
