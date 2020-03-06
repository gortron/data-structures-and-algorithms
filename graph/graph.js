class Graph {
  constructor() {
    this.vertices = new LinkedList();
  }

  insertVertex(key) {
    if (this.findVertex(key)) return null;
    let vertex = new Vertex(key);
    this.vertices.insert(vertex);
  }

  findVertex(key) {
    return this.vertices._find(key);
  }

  insertEdge(key1, key2) {
    let vertex1 = this.findVertex(key1);
    let vertex2 = this.findVertex(key2);
    if (!vertex1 || !vertex2) return null;

    vertex1.edges.add(vertex2.key);
    vertex2.edges.add(vertex1.key);
  }

  removeVertex(key) {
    let found = false;
    let target = null;
    let previous = null;
    let current = this.vertices.head;
    let vertex = null;

    for (let i = 0; i < this.vertices.length; i++) {
      vertex = current.value;
      if (vertex.edges.has(key)) return null;

      if (vertex.key === key) {
        found = true;
        target = vertex;
        break;
      }

      previous = current;
      current = current.next;
    }

    //
    if (!found) return null;
    if (target.edges.size > 0) return null;
    if (!previous) return this.vertices.remove(current);
    if (found) return this.vertices.remove(current);
  }
}

class Vertex {
  constructor(key) {
    this.key = key;
    this.edges = new Set();
  }

  toStr() {
    this.key.toString();
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

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

  // removeNext(previousNode) {
  //   if (this.length === 0) return null;
  //   if (!previousNode) this.head = this.head.next;
  //   else {
  //     if (previousNode.next === previousNode) this.head = null;
  //     else {
  //       let old = previousNode.next;
  //       previousNode.next = previousNode.next.next;
  //       if (old === this.head) this.head = old.next;
  //     }
  //   }
  //   this.length--;
  // }

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

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      // value what we want, current is node we are looking at
      if (test(value, current.value.key, i, current)) {
        return current.value;
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

export { Graph, Vertex, LinkedList, Node };
