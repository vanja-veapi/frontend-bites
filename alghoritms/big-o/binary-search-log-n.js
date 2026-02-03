function nadjiPetrovic(imenik) {
	let levo = 0;
	let desno = imenik.length - 1;

	while (levo <= desno) {
		const sredina = Math.floor((levo + desno) / 2);
		const prezime = imenik[sredina];

		const poređenje = prezime.localeCompare('Petrović', 'sr');

		if (poređenje === 0) {
			return 'Nađen Petrović';
		}

		if (poređenje < 0) {
			levo = sredina + 1;
		} else {
			desno = sredina - 1;
		}
	}

	return 'Petrović nije u imeniku';
}
