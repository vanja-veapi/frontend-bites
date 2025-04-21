import { CONFIG } from './config.js';

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

const KEYBOARD_KEYS = {
	left: 'ArrowLeft',
	right: 'ArrowRight',
};

let activeSlide = 0;
let activeBoot = FOOTBALL_BOOTS[activeSlide];
let isAnimating = false;

const nextSlide = async () => {
	await renderSlide(activeBoot);
	activeSlide = getNextSlideIndex(activeSlide);
	activeBoot = FOOTBALL_BOOTS[activeSlide];
};

const previousSlide = async () => {
	await renderSlide(activeBoot);
	activeSlide = getPreviousSlideIndex(activeSlide);
	activeBoot = FOOTBALL_BOOTS[activeSlide];
};

window.addEventListener('keydown', async (ev) => {
	if (isAnimating) return;

	isAnimating = true;

	if (ev.key === KEYBOARD_KEYS.right) {
		await nextSlide();
	}

	if (ev.key === KEYBOARD_KEYS.left) {
		await previousSlide();
	}

	isAnimating = false;
});

window.addEventListener('load', () => {
	const chevrons = document.querySelectorAll('.chevron');

	const handleClick = async (ev) => {
		if (isAnimating) return;
		isAnimating = true;

		const isNextButtonPressed = [...ev.target.classList].includes('right-chveron');

		if (isNextButtonPressed) {
			await nextSlide();
		} else {
			await previousSlide();
		}

		isAnimating = false;
	};

	chevrons.forEach((chevron) => chevron.addEventListener('click', handleClick));
});

const renderSlide = async (boot) => {
	try {
		// Change logo, boots and text concurrently
		await Promise.all([changeLogo(boot), changeBoots(boot), changeText(boot)]);
	} catch (error) {
		console.error('Error rendering slide:', error);
	}
};

const getNextSlideIndex = (currentIndex) => {
	return currentIndex === FOOTBALL_BOOTS.length - 1 ? 0 : currentIndex + 1;
};

const getPreviousSlideIndex = (currentIndex) => {
	return currentIndex === 0 ? FOOTBALL_BOOTS.length - 1 : currentIndex - 1;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const changeLogo = async (activeSlide) => {
	const logo = document.querySelector('.logo');
	if (!logo) throw new Error('Logo not found');

	const logoImg = logo.getElementsByTagName('img')[0];
	if (!logoImg) return;

	logo.style.transform = `translateY(${CONFIG.LOGO_EXIT_POSITION})`;

	await sleep(CONFIG.ANIMATION_DURATION);
	logoImg.src = `${CONFIG.IMAGE_PATH}/${activeSlide.fileName}`;

	await sleep(CONFIG.ANIMATION_DURATION);
	logo.style.transform = '';
};

const changeBoots = async (activeSlide) => {
	const bootsImg = document.querySelector('.boots img');
	if (!bootsImg) throw new Error('Boots not found');

	bootsImg.style.transform = `translateX(${CONFIG.BOOTS_EXIT_POSITION})`;

	// * Temporarily hide boots before repositioning off-screen for smooth slide-in
	bootsImg.classList.add('hidden');
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsImg.style.transform = `translateX(${CONFIG.BOOTS_ENTRY_POSITION})`;
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsImg.src = `${CONFIG.IMAGE_PATH}/${activeSlide.footballBoots}`;
	bootsImg.classList.remove('hidden');
	bootsImg.style.transform = '';
};

const changeText = async (activeSlide) => {
	const bootsModel = document.querySelector('.hero h1');
	if (!bootsModel) throw new Error('Text not found');

	bootsModel.classList.add('opacity-0');
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsModel.textContent = activeSlide.modelName;
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsModel.classList.remove('opacity-0');
};
