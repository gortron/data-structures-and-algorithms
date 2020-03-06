class Stack {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);
    if (this.length === 0) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;

    let top = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;

    this.length--;
    return top;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

export { Stack, Node };
