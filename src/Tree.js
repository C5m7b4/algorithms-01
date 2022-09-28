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
    console.log(tree.value);
    tree.children.forEach((child) => {
      if (isChild) console.log(child.value);
      if (child.children.length > 0) {
        this.traverse(child, true);
      }
    });
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.value === value) {
        return true;
      }
      const result = this._search(childNode, value);
      if (result) {
        return true;
      }
    }
    return false;
  }

  _sizeWalk(tree) {
    let count = 0;
    tree.children.forEach((child) => {
      if (child.children.length > 0) {
        this._sizeWalk(child);
      }
    });
    return count;
  }

  size(tree) {
    let treeSize = 1;
    tree.children.forEach((child) => {
      treeSize += child.children.length + 1;
      if (child.children.length > 0) {
        treeSize += this._sizeWalk(child);
      }
    });
    return treeSize;
  }

  _search(tree, value) {
    for (let i = 0; i < tree.children.length; i++) {
      const childNode = tree.children[i];
      if (childNode.value === value) {
        return childNode;
      }
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.value === value) {
        return childNode;
      }
      const result = this._search(childNode, value);
      return result;
    }
  }

  insert() {}

  reorder(node1, node2) {}
}

export default Tree;
