/**
 * Given an array of elements [1,2,3....], return a new array containing only the elements that appear exactly once in the original array.
 */
// Example [1,2,3,5,2,3,1,6,7]
// New array [5,6,7]

// Solution 1: O(n^2)
const withoutDuplicates = (array: number[]) =>
	array.filter((item) => array.indexOf(item) === array.lastIndexOf(item));

// Solution 2: O(2n) JER IMAM DVE PROLAZA KROZ NIZ
const withoutDuplicates_Big_o = (array: number[]) => {
	const count = new Map<number, number>();

	for (const num of array) {
		count.set(num, (count.get(num) || 0) + 1);
	}

	return array.filter((num) => count.get(num) === 1);
};
