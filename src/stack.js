// a stack is LIFO Last in First Out
// so the last one in is the first out that comes out
// here is a usefull reference
// https://www.cs.usfca.edu/~galles/visualization/StackArray.html
class Stack {
  constructor() {
    this.head = undefined;
    this.length = 0;
    this.stackTrace = [];
  }

  push(item) {
    if (!item) return;

    const node = item;
    this.length++;
    if (!this.head) {
      this.head = node;
      this.stackTrace.push(item);
      return;
    }

    this.stackTrace.push(item);

    node.prev = this.head;
    this.head = node;
  }

  // optimize this so that when we pop values off the stack
  // we get something that we can actually use
  pop() {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      this.stackTrace.pop();
      return head;
    }
    this.stackTrace.pop();
    const head = this.head;
    this.head = head.prev;
    return head;
  }

  peak() {
    return this.head?.value;
  }
}

export default Stack;
