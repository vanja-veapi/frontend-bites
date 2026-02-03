window.addEventListener('load', async () => {
	const categories = await getData('./zadatak.json');

	const dropdownWrapper = document.querySelector('#dropdown-wrapper');

	const categoryList = renderList(categories);

	dropdownWrapper.innerHTML = categoryList;
});

async function getData(url) {
	const { response, error } = await fetch(url)
		.then((res) => res.json())
		.then((response) => ({ response }))
		.catch((err) => ({ error: err }));

	if (error) {
		console.error('Desila se greska', error);
	}

	return response;
}

const renderList = (categories) => {
	if (!categories.length) return '';

	return `<ul>${categories
		.map(({ name, children: subCategory }) => renderListItem({ name, subCategory }))
		.join('')}
  </ul>`;
};

const renderListItem = ({ name, subCategory }) => `<li>${name}
				${subCategory.length > 0 ? renderList(subCategory) : ''}
</li>`;
