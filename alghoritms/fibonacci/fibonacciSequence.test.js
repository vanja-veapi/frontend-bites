import { fibonacciSequence } from './fibonacciSequence.js';

describe('Testiram kreiranje fibonacijevog niz', () => {
	test('Provera 1', () => expect(fibonacciSequence(0)).toEqual([]));
	test('Provera 2', () => expect(fibonacciSequence(1)).toEqual([0]));
	test('Provera 3', () => expect(fibonacciSequence(2)).toEqual([0, 1]));
	test('Provera 4', () =>
		expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]));
});

describe('Testiram pokusaj malverzacije kreiranja niza', () => {
	test('očekuje grešku za decimalni input', () => {
		expect(() => fibonacciSequence(2.5)).toThrow();
	});

	test('očekuje gresku za negativan broj', () => {
		expect(() => fibonacciSequence(-1)).toThrow();
	});
});
