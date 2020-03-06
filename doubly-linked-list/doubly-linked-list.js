class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  insert(data) {
    const node = new Node(data);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  }

  remove(node) {
    if (!node) return null;

    if (node === this.head) {
      if (!this.head.next) this.head = this.tail = null;
      else this.head = this.head.next;
    } else if (node === this.tail) {
      let penultimate = this.tail.previous;
      penultimate.next = null;
      this.tail = penultimate;
    } else {
      let prev = node.previous;
      let nex = node.next;
      prev.next = nex;
      nex.previous = prev;
    }

    this.length--;
  }

  cat(list) {
    if (!list) return null;

    this.tail.next = list.head;
    list.head.previous = this.tail;
    this.tail = list.tail;
    this.length += list.length;
  }

  findLast(val) {
    let temp = this.tail;
    while (temp.value !== val) {
      temp = temp.previous;
    }
    return temp;
  }

  reverse() {
    this.head = this.tail;
    let temp = this.tail;
    while (temp.previous !== null) {
      let swap = temp.previous;
      temp.previous = temp.next;
      temp.next = swap;
      temp = temp.next;
    }
    this.tail = temp;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.previous = this.next = null;
  }
}

export { DoublyLinkedList, Node };
