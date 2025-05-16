export const fetchJSON = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) return [];
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('Desila se greska prijatelju!', err);
		return [];
	}
};
