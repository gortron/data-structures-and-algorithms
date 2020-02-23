const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1)[0];
        nums.splice(j, 0, spliced);
      }
    }
  }
  return nums;
};

export { insertionSort };
