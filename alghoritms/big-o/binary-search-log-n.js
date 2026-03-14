function binarySearch(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (!arr || arr.length === 0) throw new Error('Niz ne sme biti prazan');
	if (target == undefined) throw new Error('Nije unet trazeni broj');

	while (leftIndex <= rightIndex) {
		const midIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[midIndex] === target) return arr[midIndex];

		if (arr[midIndex] < target) {
			leftIndex = midIndex + 1; // Suzavamo pretragu na desnu stranu niza za jedan jer znamo da nije taj element zbog prethodne provere
		} else {
			rightIndex = midIndex - 1; // Suzavamo pretragu na levu stranu niza za jedan jer znamo da nije taj element zbog prethodne provere
		}
	}

	return 'Element nije pronađen u nizu';
}

// function nadjiPetrovic(imenik) {
// 	let levo = 0;
// 	let desno = imenik.length - 1;

// 	while (levo <= desno) {
// 		const sredina = Math.floor((levo + desno) / 2);
// 		const prezime = imenik[sredina];

// 		const poređenje = prezime.localeCompare('Petrović', 'sr');

// 		if (poređenje === 0) {
// 			return 'Nađen Petrović';
// 		}

// 		if (poređenje < 0) {
// 			levo = sredina + 1;
// 		} else {
// 			desno = sredina - 1;
// 		}
// 	}

// 	return 'Petrović nije u imeniku';
// }
