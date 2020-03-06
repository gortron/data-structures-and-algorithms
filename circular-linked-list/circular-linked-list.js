class CircularLinkedList {
  constructor() {
    this.head = this.current = null;
    this.length = 0;
  }

  insert(data) {
    if (!data) return null;
    if (this.length === 0) return this.insertNext(null, data);
    if (this.length === 1) return this.insertNext(this.head, data);

    this.current = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      this.moveNext();
    }

    return this.insertNext(this.current, data);
  }

  insertNext(prevNode, data) {
    let newNode = new Node(data);
    if (!this.length) this.head = newNode.next = newNode;
    else {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.moveNext();
    this.length++;
  }

  moveNext() {
    return (this.current = this.current && this.current.next);
  }

  remove(node) {
    if (!node) return null;
    if (!this.length) return null;

    // Case where length is 1
    if (this.length === 1) this.removeNext(node);

    // Otherwise, find the precedent node of garbage node
    let prevNode = null;
    this.current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (this.current === node) return this.removeNext(prevNode);
      prevNode = this.current;
      this.moveNext();
    }
  }

  removeNext(prevNode) {
    if (!this.length) return null;

    // Case where we remove head
    if (!prevNode) {
      this.current = this.head;
      for (let i = 0; i < this.length; i++) {
        if (this.current.next === this.head) {
          this.current.next = this.current.next.next;
        }
        this.moveNext();
      }
      this.head = this.head.next;
    } else {
      if (prevNode.next === prevNode) {
        this.head = null;
      } else {
        let garbage = prevNode.next;
        prevNode.next = prevNode.next.next;
        if (garbage === this.head) this.head = garbage.next;
      }
    }
    this.length--;
  }

  clear() {
    while (this.length > 0) {
      this.remove(this.head);
    }
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export { CircularLinkedList, Node };
