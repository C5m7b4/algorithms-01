class LinkedList {
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  append(item) {
    const node = item;

    this._length++;

    if (!this._tail) {
      node.prev = undefined;
      node.next = undefined;
      this._head = this._head = this._tail = node;
      return;
    }

    node.prev = this._tail;
    node.next = undefined;

    this._tail.next = node;
    this._tail = node;
  }

  remove() {}

  removeTail() {}

  contains() {}

  isHead() {}

  isTail() {}
}

export default LinkedList;
