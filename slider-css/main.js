const IMAGE_PATH = 'images';
const FOOTBALL_BOOTS = [
	{
		fileName: 'Adidas_Logo.png',
		footballBoots: 'football-boots.png',
		modelName: 'Adidas kopačke 123',
	},
	{
		fileName: 'nike_logo.png',
		footballBoots: 'nike-boots.png',
		modelName: 'Nike faktoriel kope',
	},
];

// This value should be the same as it's in CSS file
const ANIMATION_DURATION = 500;

window.addEventListener('load', () => {
	const chevrons = document.querySelectorAll('.chevron');

	let activeSlide = 0;
	let isAnimating = false;

	const handleClick = async (ev) => {
		if (isAnimating) return;
		isAnimating = true;

		const isNextButtonPressed = [...ev.target.classList].includes('right');

		if (isNextButtonPressed) {
			await nextSlide();
		} else {
			await previousSlide();
		}

		isAnimating = false;
	};

	const nextSlide = async () => {
		await Promise.all([
			changeLogo(FOOTBALL_BOOTS[activeSlide]),
			changeBoots(FOOTBALL_BOOTS[activeSlide]),
			changeText(FOOTBALL_BOOTS[activeSlide]),
		]);

		if (activeSlide === FOOTBALL_BOOTS.length - 1) {
			activeSlide = 0;
		} else {
			activeSlide++;
		}
	};

	const previousSlide = async () => {
		if (activeSlide === 0) {
			activeSlide = FOOTBALL_BOOTS.length - 1;
		} else {
			activeSlide--;
		}

		await Promise.all([
			changeLogo(FOOTBALL_BOOTS[activeSlide]),
			changeBoots(FOOTBALL_BOOTS[activeSlide]),
			changeText(FOOTBALL_BOOTS[activeSlide]),
		]);
	};

	chevrons.forEach((chevron) => chevron.addEventListener('click', handleClick));
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const LOGO_EXIT_POSITION = '-164px';
const changeLogo = async (activeSlide) => {
	const logo = document.querySelector('.logo');
	if (!logo) throw new Error('Logo not found');

	const logoImg = logo.getElementsByTagName('img')[0];
	if (!logoImg) return;

	logo.style.transform = `translateY(${LOGO_EXIT_POSITION})`;

	await sleep(ANIMATION_DURATION);
	logoImg.src = `${IMAGE_PATH}/${activeSlide.fileName}`;

	await sleep(ANIMATION_DURATION);
	logo.style.transform = '';
};

const BOOTS_ENTRY_POSITION = '-800px';
const BOOTS_EXIT_POSITION = '800px';

const changeBoots = async (activeSlide) => {
	const bootsImg = document.querySelector('.boots img');
	if (!bootsImg) throw new Error('Boots not found');

	bootsImg.style.transform = `translateX(${BOOTS_EXIT_POSITION})`;

	// * Temporarily hide boots before repositioning off-screen for smooth slide-in
	bootsImg.classList.add('hidden');
	await sleep(ANIMATION_DURATION);
	bootsImg.style.transform = `translateX(${BOOTS_ENTRY_POSITION})`;
	await sleep(ANIMATION_DURATION);
	bootsImg.src = `${IMAGE_PATH}/${activeSlide.footballBoots}`;
	bootsImg.classList.remove('hidden');
	bootsImg.style.transform = '';
};

const changeText = async (activeSlide) => {
	const bootsModel = document.querySelector('.hero h1');
	if (!bootsModel) throw new Error('Text not found');

	bootsModel.classList.add('opacity-0');
	await sleep(ANIMATION_DURATION);
	bootsModel.textContent = activeSlide.modelName;
	await sleep(ANIMATION_DURATION);
	bootsModel.classList.remove('opacity-0');
};
