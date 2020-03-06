// My implementation of LinkedList. Note that this is not a 'lean' Linked List. I've deliberately duplicated functionality to practice different implementation approaches.

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  // push
  insert(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  remove(node) {
    if (!node) return null;

    if (node === this.head) {
      // Handle case where we are removing the head
      if (!this.head.next) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.length--;
    } else {
      // Loop through the list, looking for the node to remove
      let temp = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        // Find the node to remove, and handle the case where it's the tail
        if (temp.next === node) {
          if (temp.next === this.tail) {
            this.tail = temp;
            temp.next = null;
          } else {
            temp.next = temp.next.next;
          }
          this.length--;
          return node;
        }
        temp = temp.next;
      }
    }
  }

  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = this.tail = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index - 1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;

    if (node.next && !node.next.next) {
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }

  cat(list) {
    if (!list) return null;

    this.tail.next = list.head;
    this.tail = list.tail;
    this.length += list.length;
  }

  clear() {
    while (this.length > 0) {
      this.remove(this.head);
    }
  }

  pop() {
    return this.remove(this.tail);
  }

  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;
    return node.value;
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      // value what we want, current is node we are looking at
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }

  _test(a, b) {
    return a === b;
  }

  // The __ means we don't care what that argument is
  _testIndex(search, __, i) {
    return search === i;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export { LinkedList, Node };
