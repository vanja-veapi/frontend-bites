import { fibonacci, fibonacci_BigO_n } from './fibonacci.js';

describe('Testiram n-ti element fibonacija', () => {
	test('Provera 6. elementa', () => expect(fibonacci(6)).toBe(8));
	test('Provera 1. elementa', () => expect(fibonacci(1)).toBe(1)); // [0, 1]
	test('Provera 2. elementa', () => expect(fibonacci(2)).toBe(1)); // [0, 1, 1]
	test('Provera 0. elementa', () => expect(fibonacci(0)).toBe(0)); // [0]
});

describe('Testiram n-ti element fibonacija koristeci big o', () => {
	test('PROVERA 1', () => expect(fibonacci_BigO_n(6)).toBe(8));
	test('PROVERA 2', () => expect(fibonacci_BigO_n(1)).toBe(1));
	test('PROVERA 1', () => expect(fibonacci_BigO_n(2)).toBe(1));
	test('PROVERA 1', () => expect(fibonacci_BigO_n(0)).toBe(0));
	test('PROVERA OGROMNA', () =>
		expect(fibonacci_BigO_n(62)).toBe(4_052_739_537_881));
	test('PROVERA ogroman', () => expect(fibonacci_BigO_n(14)).toBe(377));
});
