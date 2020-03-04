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

  it("removes nodes from any position", () => {
    abcRange(13).map(character => list.insert(character));
    list.remove(list.head);
    expect(list.head.value).toEqual("b");
    list.remove(list.tail);
    expect(list.tail.value).toEqual("l");
    // a b c d   e f g h   i j k l   m
  });

  it("pops nodes from the end of the list", () => {
    abcRange(13).map(character => list.insert(character));
    // abc...lm
    list.pop();
    expect(list.length).toEqual(12);
    expect(list.tail.value).toEqual("l");
    list.pop();
    expect(list.length).toEqual(11);
    expect(list.tail.value).toEqual("k");
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

  it("clears all nodes", () => {
    list.clear();
    expect(list.length).toEqual(0);
  });

  it("concatenates two lists", () => {
    abcRange(13).map(character => list.insert(character));
    let list2 = new LinkedList();
    list2.insert("first");
    list2.insert("second");
    expect(list.length).toEqual(13);
    list.cat(list2);
    expect(list.length).toEqual(15);
    expect(list.tail.value).toEqual("second");
  });
});
