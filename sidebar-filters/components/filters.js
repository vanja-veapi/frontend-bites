import { generateInputTextField } from '../utils/generateInputTextField.js';

// Napraviti dinamicku listu filtera koji ce se sami generisati
export const FILTERS = [
	// type text filteri
	{
		label: 'Adresa test',
		fn: () => generateInputTextField('address'),
	},
	{
		label: 'Postanski broj',
		fn: () => generateInputTextField('zip'),
	},
	// radio filteri
	// {
	// 	label: 'Prikazi promovisane oglase',
	// 	className: 'address',
	// 	values: [
	// 		{
	// 			label: 'Da',
	// 			values: 'Yes',
	// 		},
	// 		{
	// 			label: 'Ne',
	// 			values: 'No',
	// 		},
	// 	],
	// },
];
