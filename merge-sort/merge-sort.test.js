import { mergeSort, stitch } from "./merge-sort";

describe("merge sort", () => {
  it("should sort an array correctly", () => {
    let nums = [8, 3, 6, 4, 2, 7, 9, 1, 5];
    let sorted = mergeSort(nums);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("helper fn stitch() should merge two sorted arrays correctly", () => {
    let left = [1, 3, 5];
    let right = [2, 4, 6];
    let stitched = stitch(left, right);
    expect(stitched).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
