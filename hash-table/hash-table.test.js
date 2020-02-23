import { HashTable } from "./hash-table";

describe("hash table", function() {
  let table = new HashTable();

  beforeEach(() => {
    table = new HashTable();
  });

  it("makes an instance of a hash table", () => {
    expect(table).toEqual(expect.any(HashTable));
  });

  it("hashes new values correctly", () => {
    expect(table.hash("First hash", 50)).toEqual(table.hash("First hash", 50));
    expect(table.hash("Second hash", 10)).toEqual(
      table.hash("Second hash", 10)
    );
    expect(
      table.hash("The quick brown fox jumped over the lazy dog", 255)
    ).toEqual(table.hash("The quick brown fox jumped over the lazy dog", 255));
    expect(table.hash("Frist hash", 50)).not.toEqual(
      table.hash("First hash", 50)
    );
    expect(
      table.hash("The quick brown fox jumped over the lazy dog", 2)
    ).toBeLessThan(3);
  });

  it("add() strings and check() if they got stored to table", () => {
    table.add("Foo");
    table.add("Bar");
    table.add("Baz");

    expect(table.check("Foo")).toEqual(true);
    expect(table.check("Bar")).toEqual(true);
    expect(table.check("Baz")).toEqual(true);

    expect(table.check("oof")).toEqual(false);
    expect(table.check("rab")).toEqual(false);
    expect(table.check("zab")).toEqual(false);
  });
});
