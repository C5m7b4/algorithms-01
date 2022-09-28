class LinkedList {
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  append(item) {
    const node = { value: item };

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

  remove(item) {
    let curr = this._head;
    for (let i = 0; curr && i < this._length; ++i) {
      if (curr.value == item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  get(idx) {}

  getAt(idx) {
    let curr = this._head;
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }
    return curr;
  }

  removeNode(node) {
    this._length--;
    if (this._length === 0) {
      const out = this._head;
      this._head = this._tail = undefined;
      return out;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node == this._head) {
      this._head = node.next;
    }
    if (node == this._tail) {
      this._tail = node.prev;
    }

    node.prev = node.next = undefined;
    return node;
  }
}

export default LinkedList;
