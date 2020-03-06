import { CircularLinkedList, Node } from "./circular-linked-list";

describe("Circular Linked List", () => {
  let list = new CircularLinkedList();

  const buildList = l => {
    l.insert("a");
    l.insert("b");
    l.insert("c");
    return l;
  };

  beforeEach(() => {
    list = new CircularLinkedList();
  });

  it("should construct a circular linked list", () => {
    expect(list).toEqual(expect.any(CircularLinkedList));
    expect(list.head).toEqual(null);
    expect(list.current).toEqual(null);
  });

  it("should insert nodes after its current node", () => {
    expect(list.insert()).toEqual(null);
    list.insert("a");
    expect(list.head.value).toEqual("a");
    list.insert("b");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next.value).toEqual("a");
    list.insert("c");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next.value).toEqual("c");
    expect(list.head.next.next.next.value).toEqual("a");
    expect(list.current.value).toEqual("c");
  });

  it("should remove a given node", () => {
    list.insert("a");
    expect(list.length).toEqual(1);
    list.remove(list.head);
    expect(list.length).toEqual(0);
    expect(list.head).toEqual(null);
    buildList(list);
    list.remove(list.head);
    expect(list.head.value).toEqual("b");
    expect(list.head.next.value).toEqual("c");
    expect(list.head.next.next.value).toEqual("b");
    list.clear();
    buildList(list);
    list.remove(list.head.next);
    expect(list.head.next.value).toEqual("c");
  });

  it("should clear all nodes", () => {
    buildList(list);
    expect(list.length).toEqual(3);
    list.clear();
    expect(list.length).toEqual(0);
  });
});
