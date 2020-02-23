import { Tree, Node } from "./avl-tree";

describe("AVL Tree", function() {
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

  it("makes an instance of a Tree", () => {
    expect(tree).toEqual(expect.any(Tree));
  });

  it("makes an instance of a Node", () => {
    expect(node).toEqual(expect.any(Node));
    expect(node.value).toEqual(1);
  });

  it("correctly adds() nodes and balances itself", () => {
    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});
