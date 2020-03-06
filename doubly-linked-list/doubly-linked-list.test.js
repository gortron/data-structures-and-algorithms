import { DoublyLinkedList, Node } from "./doubly-linked-list";

describe("DoublyLinkedList", function() {
  let list = new DoublyLinkedList();

  const buildList = l => {
    l.insert("a");
    l.insert("b");
    l.insert("c");
    return l;
  };

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("constructs a doubly linked list", () => {
    expect(list).toEqual(expect.any(DoublyLinkedList));
  });

  it("inserts new nodes after its tail", () => {
    buildList(list);
    expect(list.tail.value).toEqual("c");
    list.insert("d");
    expect(list.tail.value).toEqual("d");
    expect(list.tail.previous.value).toEqual("c");
  });

  it("removes a given node", () => {
    buildList(list);
    expect(list.remove()).toEqual(null);
    list.remove(list.head.next);
    expect(list.head.next.value).toEqual("c");
    expect(list.tail.previous.value).toEqual("a");
    list.remove(list.tail);
    expect(list.tail.value).toEqual("a");
    list.remove(list.tail);
    expect(list.tail).toEqual(null);
  });

  it("concatenates lists to its tail", () => {
    buildList(list);
    let second = new DoublyLinkedList();
    buildList(second);
    second.insert("z");
    list.cat(second);
    expect(list.tail.value).toEqual("z");
    expect(list.length).toEqual(7);
  });

  it("finds last node with a given value", () => {
    buildList(list);
    list.insert("b");
    list.insert("c");
    expect(list.findLast("b")).toEqual(list.tail.previous);
  });

  it("reverses list", () => {
    buildList(list);
    list.reverse();
    expect(list.head.value).toEqual("c");
    expect(list.tail.value).toEqual("a");
  });
});
