/**
 * 
 * 
  [
	  A, S, G, J, K, L,
	  P, R, E, A, O, J
  ]
 * 
 */

const srpskaLatinica = /^[a-zA-ZčćšđžČĆŠĐŽ]+$/;
const MAXIMUM_LENGTH = 12;

const filterDataBy12Chars = (data) =>
	data.filter(
		(word) => word.length <= MAXIMUM_LENGTH && srpskaLatinica.test(word)
	);

const sortByLongestFirst = (data) =>
	data.toSorted((a, b) => b.length - a.length);

const fetchDictionary = async () => {
	const res = await fetch('./data/serbian-words-latin.txt');
	const data = await res.text();

	const splittedData = data.split('\n');
	const filteredData = filterDataBy12Chars(splittedData);

	return sortByLongestFirst(filteredData);
};

export const slagalica = (recnik, tvojaSlova) => {
	const tvojaSlovaMap = countLetters(tvojaSlova);

	for (const rec of recnik) {
		const recMap = countLetters(rec.toUpperCase().split(''));

		let match = true;
		for (const [slovo, broj] of Object.entries(recMap)) {
			if (!tvojaSlovaMap[slovo] || tvojaSlovaMap[slovo] < broj) {
				match = false;
				break; // odmah izlazimo ako ne može
			}
		}

		if (match) return rec; // odmah vraća prvu validnu reč
	}

	return 'Nijedna rec nije pronadjena'; // ako nema odgovarajuće reči
};

function countLetters(niz) {
	return niz.reduce((acc, slovo) => {
		acc[slovo] = (acc[slovo] || 0) + 1;
		return acc;
	}, {});
}

(async () => {
	const recnik = await fetchDictionary();
	const tvojaSlova = [
		'A',
		'S',
		'G',
		'J',
		'K',
		'L',
		'P',
		'R',
		'E',
		'A',
		'O',
		'J',
	];
	const res = slagalica(recnik, tvojaSlova);
	console.log('Dobijena reč:', res);
})();
