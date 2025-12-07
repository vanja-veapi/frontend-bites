import { setQueryParams } from '../main.js';

export const generateInputTextField = (filterName) => {
	const input = document.createElement('input');

	input.type = 'text';
	input.className = filterName;
	input.id = filterName;
	input.dataset.filter = filterName;

	input.addEventListener('input', (ev) => {
		ev.preventDefault();

		setQueryParams(ev);
	});

	return input;
};
