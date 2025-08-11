export const SYMBOLS = ['spades', 'hearts', 'clubs', 'diamonds'];
export const CARD_NAMES = {
	1: 'A',
	11: 'J',
	12: 'Q',
	13: 'K',
};

export class Card {
	value;
	symbol;
	isFaceUp = true;

	constructor({ value, symbolIndex }) {
		if (typeof value !== 'number') throw new Error('Value must be a number');

		if (value < 1 || value > 13) {
			throw new Error('Number must be between 1 and 13');
		}
		if (symbolIndex < 0 || symbolIndex >= SYMBOLS.length) {
			throw new Error('Invalid symbol index');
		}

		this.value = value;
		this.display = CARD_NAMES[value] ?? value;
		this.symbol = SYMBOLS[symbolIndex];
	}

	flip() {
		return (this.isFaceUp = !this.isFaceUp);
	}
}

/**
 * TEST CASE
 * 1. Uneti broj karte koji nije u opsegu od 1 do 14
 * 2. Uneti nepostojeci simbol
 *
 * */
