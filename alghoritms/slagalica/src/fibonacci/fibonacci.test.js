import { fibonacci } from './fibonacci.js';

describe('Testiram fibonacijev niz', () => {
	test('Provera 1', () => expect(fibonacci(6)).toBe([0, 1, 1, 2, 3, 5]));
});
