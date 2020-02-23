import { LinkedList, Node } from "./linked-list";

// Jest tests
describe("LinkedList", function() {
  // Functions to create quick array of unique characters for tests
  const range = length =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = length =>
    range(length).map(num => String.fromCharCode(97 + num));
  let list = new LinkedList();

  beforeEach(() => {
    list = new LinkedList();
  });

  it("constructs a linked list", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  it("pushes new nodes to end of list", () => {
    abcRange(26).map(character => list.push(character));
    expect(list.length).toEqual(26);
  });

  it("pops nodes from the end of the list", () => {
    abcRange(13).map(character => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  it("gets node from a given index", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map(character => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  it("deletes node at a given index", () => {
    abcRange(26).map(character => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});
