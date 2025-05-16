import { CONFIG } from './config.js';
import { sleep } from './utils/sleep.js';

export const changeLogo = async (activeSlide) => {
	const logo = document.querySelector('.logo');
	if (!logo) throw new Error('Logo not found');

	const logoImg = logo.querySelector('img');
	if (!logoImg) return;

	logo.style.transform = `translateY(${CONFIG.LOGO_EXIT_POSITION})`;
	await sleep(CONFIG.ANIMATION_DURATION);

	logoImg.src = `${CONFIG.IMAGE_PATH}/${activeSlide.fileName}`;
	await sleep(CONFIG.ANIMATION_DURATION);
	logo.style.transform = '';
};

export const changeBoots = async (activeSlide) => {
	const bootsImg = document.querySelector('.boots img');
	if (!bootsImg) throw new Error('Boots not found');

	bootsImg.style.transform = `translateX(${CONFIG.BOOTS_EXIT_POSITION})`;
	bootsImg.classList.add('hidden');

	await sleep(CONFIG.ANIMATION_DURATION);
	bootsImg.style.transform = `translateX(${CONFIG.BOOTS_ENTRY_POSITION})`;

	await sleep(CONFIG.ANIMATION_DURATION);
	bootsImg.src = `${CONFIG.IMAGE_PATH}/${activeSlide.footballBoots}`;
	bootsImg.classList.remove('hidden');
	bootsImg.style.transform = '';
};

export const changeText = async (activeSlide) => {
	const bootsModel = document.querySelector('.hero h1');
	if (!bootsModel) throw new Error('Text not found');

	bootsModel.classList.add('opacity-0');
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsModel.textContent = activeSlide.modelName;
	await sleep(CONFIG.ANIMATION_DURATION);
	bootsModel.classList.remove('opacity-0');
};

const BASE_PATH = './images';
export const changeBackground = (boot) => {
	const hero = document.querySelector('.hero');
	hero.style.opacity = 0;

	setTimeout(() => {
		hero.style.opacity = 1;
		hero.style.backgroundImage = `url("${BASE_PATH}/${boot.background}")`;
	}, 200);
};
