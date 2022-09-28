class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
  appendChild(value) {
    return this.insertChild(value);
  }

  remove(tree, value) {
    for (let i = 0; i < tree.children.length; i++) {
      const childNode = tree.children[i];
      if (childNode.value === value) {
        tree.children.splice(i, 1);
        return true;
      }
      if (childNode.children.length > 0) {
        this.remove(childNode, value);
      }
    }
    return false;
  }

  traverse(tree, isChild = false) {
    console.log('traversing');
    console.log(tree.value);
    tree.children.forEach((child) => {
      if (isChild) console.log(child.value);
      if (child.children.length > 0) {
        this.traverse(child, true);
      }
    });
  }

  contains(value) {}

  size(tree) {}
}

export default Tree;
