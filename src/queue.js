// a queue is FIFO First in First Out
// so the first thing inserted is the first thing out
// here is a good reference for a queue
// https://www.cs.usfca.edu/~galles/visualization/QueueArray.html
class Queue {
  constructor() {
    this._length = 0;
    this._head = undefined;
    this._tail = undefined;
    this._queueList = [];
    this._headIndex = 0;
    this._tailIndex = 0;
  }

  enqueue(item) {
    const node = item;

    this._length++;

    if (!this._tail) {
      this._tail = this._head = node;
      this._head.index = this._length - 1;
      this._queueList.push(node);
      this._tailIndex++;
      this._tail.index = this._length - 1;
      return;
    }

    // setup our previous node to point to use as their next
    // we need to go two back because we have already incremented the length by one
    this._queueList[this._length - 2].next = node;

    // add this node to out queueList array
    this._queueList.push(node);

    // set this as our tail node
    this._tail = node;
    this._tail.index = this._length - 1;

    // setup our traversal pathway
    this._tail.prev = this._queueList[this._length - 2];
    this._tailIndex++;
  }

  dequeue() {
    if (!this._head) {
      return undefined;
    }

    this._length--;
    const head = this._head;
    this._head = this._head.next;
    this._head.prev = undefined;

    // remove this item out of our queueList
    this._queueList[head.index] = null;

    // increment the headIndex by one
    this._headIndex++;

    if (this._length === 0) {
      this._tail = undefined;
    }

    // since we are removing this item, then there should be no reference to the next
    head.next = undefined;
    return head;
  }

  peek() {
    return this._head;
  }

  clear() {
    this._head = undefined;
    this._tail = undefined;
    this._length = 0;
    this._queueList = [];
    this._headIndex = 0;
    this._tailIndex = 0;
  }
}

export default Queue;
