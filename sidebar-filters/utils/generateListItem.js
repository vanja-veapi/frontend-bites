import { generateInputTextField } from './generateInputTextField.js';

export const generateListItem = ({ label, fn }) => {
	const list = document.createElement('li');

	const _label = document.createElement('label');
	const labelText = document.createTextNode(label);
	_label.appendChild(labelText);

	list.appendChild(_label);
	list.appendChild(fn());

	return list;
};
