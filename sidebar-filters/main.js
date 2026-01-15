import { FILTERS } from './components/filters.js';
import { generateListItem } from './utils/generateListItem.js';

const params = new URLSearchParams();

// TODO: Export je privremeno tu, mozda i funkcija bude prebacena
export const setQueryParams = (ev) => {
	const queryKey = ev.target.dataset.filter;

	const [key, value] = [queryKey, ev.target.value];

	if (ev.target.type === 'checkbox') {
		updateCheckboxParams({ key, event: ev, value });
	} else {
		params.set(key, value);
	}

	if (value === '') {
		params.delete(key);
	}

	const baseUrl = new URL(window.location);
	baseUrl.search = params.toString(); // dovoljno je samo ovo
	window.history.replaceState({}, '', baseUrl);
};

const updateCheckboxParams = ({ key, event, value }) => {
	const list = JSON.parse(params.get(key)) ?? [];
	// Ako je checkbox, moze vise stvari da se seletkuje, znaci ide niz

	if (event.target.checked) {
		list.push(Number(value));
		params.set(key, JSON.stringify(list));
	} else {
		const listWithoutTargetValue = list.filter((item) => item !== Number(event.target.value));

		updateParamFromList(params, key, listWithoutTargetValue);
	}
};

const updateParamFromList = (params, key, list) => {
	if (list.length === 0) {
		params.delete(key);
	} else {
		params.set(key, JSON.stringify(list));
	}
};

const getQueryParams = () => window.location.search.replace('?', '');

const convertFiltersToJSON = (queryParams) => {
	const filtersList = queryParams.split('&');

	const jsonObj = filtersList.reduce((acc, param) => {
		const [key, value] = param.split('=');
		acc[key] = value;
		return acc;
	}, {});

	return jsonObj;
};

window.addEventListener('load', () => {
	// Dinamicko dodavanje filtera
	const sidebar = document.querySelector('#sidebar');
	sidebar.addEventListener('');
	FILTERS.forEach(({ label, fn }) => sidebar.appendChild(generateListItem({ label, fn })));

	// DOLE RADI

	const queryParams = getQueryParams();
	const filtersObject = convertFiltersToJSON(queryParams);
	console.log(filtersObject);
	fetch('www.google.com', { method: 'POST', body: JSON.stringify(filtersObject) });

	const address = document.querySelector('.address');
	const promotionOptions = document.querySelectorAll('.isAdPromoted');
	const carAccessories = document.querySelectorAll('.carAccessories');

	address.addEventListener('input', (ev) => {
		ev.preventDefault();

		setQueryParams(ev);
	});

	promotionOptions.forEach((ad) =>
		ad.addEventListener('input', (ev) => {
			console.log('INPUT RADI i za radio buttone, vrv i za cb');
			setQueryParams(ev);
		})
	);

	carAccessories.forEach((accessory) =>
		accessory.addEventListener('change', (ev) => {
			setQueryParams(ev);
		})
	);
});

/**
 *
 * Zasto ove linije koda refreshuju stranicu const baseUrl = window.location; baseUrl.search = params.toString();?????
 * Zato što svaka promena window.location objekta predstavlja navigaciju – tj. browser tretira to kao da si zadao novu adresu stranice.
 * window.location je referenca na trenutni URL
 * menjanje location.search, location.href, location.pathname, itd. → triggers page reload
 */
