import { Tree, Node } from "./binary-tree";

// unit tests
// do not modify the below code
describe("Binary Tree", function() {
  let nums = [];
  let tree = new Tree();
  let objs = tree.toObject();
  let node = new Node();

  beforeEach(() => {
    nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    tree = new Tree();
    nums.map(num => tree.add(num));
    objs = tree.toObject();
    node = new Node(1);
  });

  it("makes node elements", () => {
    expect(node).toEqual(expect.any(Node));
    expect(node.value).toEqual(1);
  });

  it("creates a binary tree from an array", () => {
    expect(objs.value).toEqual(3);

    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();

    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();

    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();

    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();

    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });

  it("can perform a depth-first search", () => {
    expect(tree.maxDepth()).toEqual(5);
  });
});
