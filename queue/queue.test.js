import { Queue, Node } from "./queue";

describe("Queue", () => {
  let queue = new Queue();

  function addTo(queue) {
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
  }

  beforeEach(() => {
    queue = new Queue();
  });

  it("should create a queue", () => {
    expect(queue).toEqual(expect.any(Queue));
  });

  it("should enqueue items", () => {
    expect(queue.length).toEqual(0);
    queue.enqueue("a");
    expect(queue.length).toEqual(1);
    expect(queue.head.value).toEqual("a");
    expect(queue.tail.value).toEqual("a");
    queue.enqueue("b");
    expect(queue.length).toEqual(2);
    expect(queue.head.value).toEqual("a");
    expect(queue.tail.value).toEqual("b");
  });

  it("should dequeue items", () => {
    addTo(queue);
    expect(queue.length).toEqual(3);
    expect(queue.head.value).toEqual("a");
    expect(queue.dequeue().value).toEqual("a");
    expect(queue.length).toEqual(2);
  });
});
