class LinkedList {
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
  }

  debug() {
    let curr = this._head;
    let out = '';
    for (let i = 0; curr && i < this._length; ++i) {
      out += `${i} => ${curr.value} `;
      curr = curr.next;
    }

    console.log(out);
  }

  prepend(item) {
    this._length++;
    const node = { value: item };
    if (!this._head) {
      this._head = this._tail = node;
    }

    node.next = this._head;
    this._head.prev = node;
    this._head = node;
  }

  insertAt(item, idx) {
    if (idx > this._length) {
      throw new Error('oh no, you cant do this mans');
    }
    if (idx === this._length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }
    this._length++;

    const curr = this.getAt(idx);
    const node = { value: item };

    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (node.prev) {
      node.prev.next = curr;
    }
  }

  append(item) {
    const node = { value: item };

    this._length++;

    if (!this._tail) {
      this._head = this._head = this._tail = node;
      //this.debug();
      return;
    }

    node.prev = this._tail;
    node.next = undefined;

    this._tail.next = node;
    this._tail = node;
    //this.debug();
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

  get(idx) {
    return this.getAt(idx).value;
  }

  removeAt(idx) {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

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
