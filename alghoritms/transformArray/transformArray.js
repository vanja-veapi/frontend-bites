/**
 * Za zadati niz [1, 2, 3] -> Rezultat treba da bude [3, 6, 5]
 * Novi dobijeni niz se dobija formulom: zbirom prethodnog, sledeceg i trenutnog
 * Ako ne postoji prethodni element, sabira se samo sledeci i trenutni
 * Ako ne postoji sledeci element, sabira se samo prethodni i trenutni
 */

export const transformArray = (inputArray) => {
	return inputArray.map((element, index, array) => {
		const prevElement = array[index - 1] ?? 0;
		const nextElement = array[index + 1] ?? 0;
		const currentElement = element;

		return prevElement + currentElement + nextElement;
	});
	// throw new Error('Not implemented yet');
};
