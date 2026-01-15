/**
 * Given an array of elements [1,2,3....], return a new array containing only the elements that appear exactly once in the original array.
 */
// Example [1,2,3,5,2,3,1,6,7]
// New array [5,6,7]

const withoutDuplicates = (array: number[]) =>
	array.filter((item) => array.indexOf(item) === array.lastIndexOf(item));

const getElementAtIndex = ({ array, index }: { array: any[]; index: number }) =>
	array[index];
