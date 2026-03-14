const ROWS = 3;
const COLS = 5;

const SLOT_SYMBOLS = {
	0: '🍒',
	1: '♥️',
	2: 'K',
	3: 'Q',
	4: 'J',
	5: '10',
	6: '🍍',
	7: '🍋',
};

const getSlotSymbolIndex = () =>
	Math.floor(Math.random() * Object.keys(SLOT_SYMBOLS).length);
// Koraci

// 1. Generisati ishod ruke/spina
// outcome = result
const generateOutcome = () => {
	const outcome = [];
	for (let i = 0; i < ROWS; i++) {
		let col = [];
		for (let j = 0; j < COLS; j++) {
			const slotSymbolIndex = getSlotSymbolIndex();

			col.push(SLOT_SYMBOLS[slotSymbolIndex]);
		}
		outcome.push(col);
	}

	return outcome;
};

const generatedOutcome = generateOutcome();

// 3. Provera paylines
const payLines = [
	{ name: 'top', pattern: [0, 0, 0, 0, 0] },
	{ name: 'middle', pattern: [1, 1, 1, 1, 1] },
	{ name: 'bottom', pattern: [2, 2, 2, 2, 2] },

	{ name: 'V_Shape', pattern: [0, 1, 2, 1, 0] },
	{ name: 'inverted_V', pattern: [2, 1, 0, 1, 2] },

	{ name: 'dip', pattern: [0, 0, 1, 0, 0] },
	{ name: 'rise', pattern: [2, 2, 1, 2, 2] },

	{ name: 'zigZagUp', pattern: [1, 0, 1, 2, 1] },
	{ name: 'zigZagDown', pattern: [1, 2, 1, 0, 1] },

	{ name: 'slope', pattern: [0, 1, 1, 1, 2] },
];

// 4. Prolazak kroz svaku payline i provera da li je dobitna
for (const payLine of payLines) {
	const collectedSymbols = [];

	const firstRow = payLine.pattern[0];
	const firstSymbol = generatedOutcome[firstRow][0];
	let matchCount = 0;

	for (let col = 0; col < payLine.pattern.length; col++) {
		const row = payLine.pattern[col];
		const symbol = generatedOutcome[row][col];

		if (symbol !== firstSymbol) break; // Nema više poklapanja, izlazimo iz petlje

		matchCount++;
		collectedSymbols.push(symbol);
	}

	if (matchCount >= 3) {
		console.log(
			`\n\n\n===== [ DOBIO SI!!! ] =====\n`,
			`Dobitna linija: ${payLine.name}`,
			`\nPovezano: ${matchCount}`,
			`\nSimboli: ${collectedSymbols}\n`,
			`===== [ KRAJ DOBITKA ] =====`,
		);
	}
}

console.table(generatedOutcome);
