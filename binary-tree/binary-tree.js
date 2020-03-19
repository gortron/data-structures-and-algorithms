class Tree {
  constructor() {
    this.root = null;
  }

  toObject() {
    return this.root;
  }

  add(value) {
    if (!this.root) {
      // if there is no root, then set to root
      this.root = new Node(value);
      return;
    }

    // iterative implementation
    let current = this.root;
    // loop will zig-zag through the tree, setting current to whichever node we are checking. loop breaks at return, when a new Node is added.
    while (true) {
      if (value < current.value) {
        // go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  // if target is closer to leaf, use DFS
  traversePostorder() {
    if (!this.root) return null;
    const nodes = [];

    nodes.push(postorderHelper(this.root.left));
    nodes.push(postorderHelper(this.root.right));
    nodes.push(this.root);
    return nodes;
  }

  postorderHelper(node) {
    if (!node) return null;
    if (node !== null) {
      postOrderHelper(node.left);
      postOrderHelper(node.right);
    }
    return node;
  }

  // if target is closer to root, use BFS
  maxDepth() {
    if (!this.root) return 0;

    let leftDepth = this.visit(this.root.left, 1);
    let rightDepth = this.visit(this.root.right, 1);
    return Math.max(leftDepth, rightDepth);
  }

  visit(node, depth) {
    if (!node) return depth;

    let left = this.visit(node.left, depth + 1);
    let right = this.visit(node.right, depth + 1);
    return Math.max(left, right);
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export { Tree, Node };
