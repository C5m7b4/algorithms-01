class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChild(value) {
    const newBinaryTree = new BinaryTree(value);
    const queue = [this];
    let valueInserted = false;

    while (queue.length && !valueInserted) {
      const currentTree = queue.shift();

      if (currentTree.left === null) {
        currentTree.left = newBinaryTree;
        valueInserted = true;
      } else if (currentTree.right === null) {
        currentTree.right = newBinaryTree;
        valueInserted = true;
      } else {
        queue.push(currentTree.left);
        queue.push(currentTree.right);
      }
    }
    return newBinaryTree;
  }

  traverse() {}

  contains(value) {}
}

export default BinaryTree;
