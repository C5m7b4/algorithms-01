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
  remove(node) {
    let curr = this._head;
    if (curr.value == node) {
      curr = curr.next;
      this._head = curr;
    }

    let savedNode = {};
    let readyToReplace = false;

    while (curr.next) {
      if (readyToReplace) {
        savedNode.next = curr.next;
        return;
      }
      if (curr.next.value === node) {
        savedNode = curr;
        readyToReplace = true;
      }

      curr = curr.next;
    }
  }

  /**
   * remove the last element of the list
   * @return undefined
   */
  removeTail() {
    let curr = this._head;
    while (curr.next !== this._tail) {
      curr = curr.next;
    }
    this._tail = curr;
    curr.next = null;
  }

  /**
   * Searches the Linked List and returns true if it contains the value
   * passed
   * @param {*} value - the value to search for
   * @return {boolean} - true if the value is found, otherwise false
   */
  contains(value) {
    let curr = this._head;
    if (curr.value == value) {
      return true;
    }
    while (curr.next) {
      curr = curr.next;
      if (curr.value === value) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * @param {*} node - the node to test if its equal to the head
   * @returns boolean
   */
  isHead(node) {
    return node === this._head;
  }

  /**
   *
   * @param {*} node - the node to test if its equal to the tail
   * @returns boolean
   */
  isTail(node) {
    return node === this._tail;
  }

  // we could also implement a prepend
  // or an insert at
}

export default SingleLinkedList;
