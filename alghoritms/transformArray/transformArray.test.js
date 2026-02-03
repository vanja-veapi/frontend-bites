import { transformArray } from './transformArray';

describe('transformArray', () => {
	test('should transform the array correctly', () => {
		expect(transformArray([1, 2, 3])).toEqual([3, 6, 5]);
		expect(transformArray([3])).toEqual([3]);
	});
});
