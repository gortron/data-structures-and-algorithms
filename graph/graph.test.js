import { Graph, Vertex, LinkedList } from "./graph";

describe("Graph", () => {
  // {"edges": Set {}, "key": "a"}
  let graph = new Graph();

  beforeEach(() => {
    graph = new Graph();
  });

  it("should make a graph", () => {
    expect(graph).toEqual(expect.any(Graph));
    expect(graph.vertices).toEqual(expect.any(LinkedList));
  });

  it("should make vertices", () => {
    let vertex = new Vertex();
    expect(vertex).toEqual(expect.any(Vertex));
  });

  it("should insert a vertex", () => {
    graph.insertVertex("a");
    expect(graph.vertices.length).toEqual(1);
    expect(graph.vertices.head.value.key).toEqual("a");
    expect(graph.insertVertex("a")).toEqual(null);
  });

  it("should find a vertex of a given key", () => {
    graph.insertVertex("a");
    expect(graph.findVertex("a")).toEqual(graph.vertices.head.value);
    expect(graph.findVertex("a")).toEqual(expect.any(Vertex));
    graph.insertVertex("b");
    expect(graph.findVertex("b")).toEqual(graph.vertices.tail.value);
    expect(graph.findVertex("c")).toEqual(null);
  });

  it("should add edges between given vertices", () => {
    graph.insertVertex("a");
    graph.insertVertex("b");
    let vertex1 = graph.findVertex("a");
    let vertex2 = graph.findVertex("b");
    graph.insertEdge(vertex1.key, vertex2.key);
    expect(vertex1.edges.has(vertex2.key)).toEqual(true);
    expect(vertex2.edges.has(vertex1.key)).toEqual(true);
  });

  it("should add edges between given vertices", () => {
    graph.insertVertex("a");
    graph.insertVertex("b");
    let vertex1 = graph.findVertex("a");
    let vertex2 = graph.findVertex("b");
    graph.insertEdge(vertex1.key, vertex2.key);
    expect(vertex1.edges.has(vertex2.key)).toEqual(true);
    expect(vertex2.edges.has(vertex1.key)).toEqual(true);
  });

  it("should remove a given vertex if it has no edges", () => {
    graph.insertVertex("a");
    expect(graph.vertices.length).toEqual(1);
    graph.removeVertex("a");
    expect(graph.vertices.length).toEqual(0);
    graph.insertVertex("a");
    graph.insertVertex("b");
    expect(graph.vertices.head.value.key).toEqual("a");
    expect(graph.vertices.tail.value.key).toEqual("b");
    graph.removeVertex("b");
    expect(graph.vertices.head.value.key).toEqual("a");
    expect(graph.vertices.tail.value.key).toEqual("a");
    graph.insertVertex("a");
    graph.insertVertex("b");
    let vertex1 = graph.findVertex("a");
    let vertex2 = graph.findVertex("b");
    graph.insertEdge(vertex1.key, vertex2.key);
    expect(graph.removeVertex("a")).toEqual(null);
  });
});
