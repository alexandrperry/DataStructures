const removeDuplicates = function (nums) {
	let i = 0;
	let j = 1;
	for (; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
};

removeDuplicates([1, 1, 2, 2, 3, 4, 4, 4]);
