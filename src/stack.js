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

  pop() {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    this.stackTrace.pop();
    const head = this.head;
    this.head = head.prev;
    return head.value;
  }

  peak() {
    return this.head?.value;
  }
}

export default Stack;
