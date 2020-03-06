class Queue {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.length === 0) this.head = node;
    else this.tail.next = node;
    this.length++;
    return (this.tail = node);
  }

  dequeue() {
    if (this.length === 0) return null;

    let first = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;

    this.length--;
    return first;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

export { Queue, Node };
