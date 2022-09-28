// reference website
// https://visualgo.net/en/list

class SingleLinkedList {
  constructor(value) {
    if (typeof value === 'undefined' || value === null) {
      throw new Error(
        'you must initialize a SingleLinkedList with an initial value'
      );
    }
    this._head = { value, next: null };
    this._tail = this._head;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param {*} value - the value to insert
   */
  insert(value) {
    // update tail
    const node = { value, next: null };
    this._tail.next = node;
    this._tail = node;
  }

  /**
   * Deletes a node
   * @param {*} node - the node to remove
   * @return {*} value - the deleted nodes value
   */
  remove() {}

  removeTail() {
    let curr = this._head;
    while (curr.next !== this._tail) {
      curr = curr.next;
    }
    this._tail = curr;
    curr.next = null;
  }

  contains() {}

  isHead() {}

  isTail() {}
}

export default SingleLinkedList;
