window.addEventListener('load', () => {
	const chevrons = document.querySelectorAll('.chevron');

	chevrons.forEach((chevron) => chevron.addEventListener('click', handleClick));
});

const handleClick = (ev) => {
	const isNextButtonPressed = [...ev.target.classList].includes('right');

	if (isNextButtonPressed) {
		nextSlide();
		return;
	}

	previousSlide();
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const changeLogo = async () => {
	const logo = document.querySelector('.logo');
	if (!logo) throw new Error('Logo not found');

	const logoImg = logo.getElementsByTagName('img')[0];
	if (!logoImg) return;

	logo.style.transform = 'translateY(-164px)';

	await sleep(400);
	logoImg.src = `images/test-logo.png`;

	await sleep(800);
	logo.style.transform = '';
};

const BOOTS_ENTRY_POSITION = '-800px';
const BOOTS_EXIT_POSITION = '800px';

const changeBoots = async () => {
	const bootsImg = document.querySelector('.boots img');
	if (!bootsImg) throw new Error('Boots not found');

	bootsImg.style.transform = `translateX(${BOOTS_EXIT_POSITION})`;

	// * Temporarily hide boots before repositioning off-screen for smooth slide-in
	bootsImg.classList.add('hidden');
	await sleep(500);
	bootsImg.style.transform = `translateX(${BOOTS_ENTRY_POSITION})`;
	await sleep(500);
	bootsImg.classList.remove('hidden');
	bootsImg.style.transform = '';
};

const changeText = async () => {
	const bootsModel = document.querySelector('.hero h1');
	if (!bootsModel) throw new Error('Text not found');

	bootsModel.classList.add('opacity-0');
	await sleep(800);
	bootsModel.textContent = 'Nove tike bla bla';
	await sleep(100);
	bootsModel.classList.remove('opacity-0');
};

const nextSlide = () => {
	changeLogo();
	changeBoots();
	changeText();
};

const previousSlide = () => console.log('Previous slide...');
