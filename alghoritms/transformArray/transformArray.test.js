import { transformArray } from './transformArray';

describe('transformArray', () => {
	test('should transform the array correctly', () => {
		expect(transformArray([1, 2, 3])).toEqual([3, 6, 5]);
		expect(transformArray([12, 7, 9, 3, 8])).toEqual([19, 28, 19, 20, 11]);
		expect(transformArray([1, 4, 0, -6, 9, 12, -8, 20])).toEqual([
			5, 5, -2, 3, 15, 13, 24, 12,
		]);
		expect(transformArray([3])).toEqual([3]);
	});
});
