import { Card } from './Card.js';
import { expect } from '@jest/globals';

describe('Testing Card Class', () => {
	it('should test typeof value', () => {
		const card = new Card({ value: 1, symbolIndex: 1 });

		expect(typeof card.value).toBe('number');
	});

	it('value should be within range [min, max]', () => {
		const min = 1;
		const max = 13;
		const card = new Card({ value: 13, symbolIndex: 3 });

		expect(card.value).toBeGreaterThanOrEqual(min);
		expect(card.value).toBeLessThanOrEqual(max);
	});

	test('flip method', () => {
		const card = new Card({ value: 1, symbolIndex: 0 });

		expect(typeof card.flip()).toBe('boolean');
	});
});
