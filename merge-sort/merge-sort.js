const mergeSort = nums => {
  if (nums.length === 1) return nums;

  let middle = Math.floor(nums.length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle, nums.length);

  return stitch(mergeSort(left), mergeSort(right));
};

const stitch = (left, right) => {
  let stitched = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      stitched.push(left.shift());
    } else {
      stitched.push(right.shift());
    }
  }
  return [...stitched, ...left, ...right];
};

export { mergeSort, stitch };
