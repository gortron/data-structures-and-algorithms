import { Stack, Node } from "./stack";

describe("Stack", () => {
  let stack = new Stack();

  function addTo(stack) {
    stack.push("a");
    stack.push("b");
    stack.push("c");
  }

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create a stack", () => {
    expect(stack).toEqual(expect.any(Stack));
  });

  it("should push items to top of stack", () => {
    expect(stack.length).toEqual(0);
    stack.push("a");
    expect(stack.length).toEqual(1);
    expect(stack.head.value).toEqual("a");
    expect(stack.tail.value).toEqual("a");
    stack.push("b");
    expect(stack.length).toEqual(2);
    expect(stack.head.value).toEqual("b");
    expect(stack.tail.value).toEqual("a");
  });

  it("should pop items from top of stack", () => {
    addTo(stack);
    expect(stack.length).toEqual(3);
    expect(stack.head.value).toEqual("c");
    expect(stack.pop().value).toEqual("c");
    expect(stack.head.value).toEqual("b");
    expect(stack.tail.value).toEqual("a");
    expect(stack.length).toEqual(2);
  });
});
