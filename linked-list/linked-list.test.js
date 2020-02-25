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

  it("inserts new nodes to end of list", () => {
    abcRange(26).map(character => list.insert(character));
    expect(list.length).toEqual(26);
    expect(list.tail.value).toEqual("z");
  });

  it("pops nodes from the end of the list", () => {
    abcRange(13).map(character => list.insert(character));
    expect(list.length).toEqual(13);
    expect(list.pop()).toEqual("m");
    expect(list.length).toEqual(12);
    expect(list.pop()).toEqual("l");
  });

  it("gets node from a given index", () => {
    list.insert("first");
    expect(list.get(0)).toEqual("first");
    list.insert("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map(character => list.insert(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  it("removes a given node", () => {
    abcRange(26).map(character => list.insert(character));
    list.remove(list.head);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("n");
    expect(list.get(13)).toEqual("o");
    list.remove(list.head);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});
