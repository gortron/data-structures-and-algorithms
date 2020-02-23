import { quickSort } from "./quick-sort";

describe("quick sort", () => {
  it("should sort an array correctly", () => {
    let nums = [8, 3, 6, 4, 2, 7, 9, 1, 5];
    let sorted = quickSort(nums);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
