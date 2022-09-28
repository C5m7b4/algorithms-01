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
    if (this.value === value) {
      delete this;
    }
    this.children.forEach((child, index) => {
      if (child.value === value) {
        this.children.splice(index, 1);
      } else {
        child.remove(value);
      }
    });
  }

  traverse(tree, func = console.log) {
    func(tree);
    tree.children.forEach((child) => {
      this.traverse(child, func);
    });
  }

  contains(searchValue) {
    let result = false;
    this.traverse(this, (leaf) => {
      result = result || leaf.value === searchValue;
    });
    return result;
  }

  size(tree) {
    let size = 0;
    this.traverse(tree, () => {
      size++;
    });
    return size;
  }

  find(tree, value) {
    let result = false;
    this.traverse(tree, (leaf) => {
      if (leaf.value === value) {
        result = leaf;
      }
    });
    return result;
  }

  insert(parentTree, value) {
    let leaf = this.find(this, parentTree.value);
    if (leaf) {
      leaf.insertChild(value);
    }
    return leaf;
  }

  reorder(node1, node2) {
    const leaf1 = this.find(this, node1);
    const leaf2 = this.find(this, node2);
    leaf1.value = node2;
    leaf2.value = node1;
  }
}

export default Tree;
