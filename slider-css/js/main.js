import { CONFIG, KEYBOARD_KEYS } from './config.js';
import { sleep } from './utils/sleep.js';

window.addEventListener('load', async () => {
	const fetchJSON = async (url) => {
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

	const FOOTBALL_BOOTS = await fetchJSON('../data.json');
	let activeSlide = 0;
	let activeBoot = FOOTBALL_BOOTS[activeSlide];
	let isAnimating = false;

	const loading = document.querySelector('#loading');
	if (loading) {
		setTimeout(() => loading.classList.add('fade-out'), 500);
		setTimeout(() => loading.remove(), 2000);
	}

	const getNextSlideIndex = (currentIndex) =>
		currentIndex === FOOTBALL_BOOTS.length - 1 ? 0 : currentIndex + 1;

	const getPreviousSlideIndex = (currentIndex) =>
		currentIndex === 0 ? FOOTBALL_BOOTS.length - 1 : currentIndex - 1;

	const changeLogo = async (activeSlide) => {
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

	const changeBoots = async (activeSlide) => {
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

	const changeText = async (activeSlide) => {
		const bootsModel = document.querySelector('.hero h1');
		if (!bootsModel) throw new Error('Text not found');

		bootsModel.classList.add('opacity-0');
		await sleep(CONFIG.ANIMATION_DURATION);
		bootsModel.textContent = activeSlide.modelName;
		await sleep(CONFIG.ANIMATION_DURATION);
		bootsModel.classList.remove('opacity-0');
	};

	const BASE_PATH = '../images';
	const changeBackground = (boot) => {
		const hero = document.querySelector('.hero');
		hero.style.opacity = 0;

		setTimeout(() => {
			hero.style.opacity = 1;
			hero.style.backgroundImage = `url("${BASE_PATH}/${boot.background}")`;
		}, 200);
	};

	const renderSlide = async (boot) => {
		try {
			await Promise.all([
				changeLogo(boot),
				changeBoots(boot),
				changeText(boot),
				changeBackground(boot),
			]);
		} catch (error) {
			console.error('Error rendering slide:', error);
		}
	};

	const nextSlide = async () => {
		activeSlide = getNextSlideIndex(activeSlide);
		activeBoot = FOOTBALL_BOOTS[activeSlide];
		await renderSlide(activeBoot);
	};

	const previousSlide = async () => {
		activeSlide = getPreviousSlideIndex(activeSlide);
		activeBoot = FOOTBALL_BOOTS[activeSlide];
		await renderSlide(activeBoot);
	};

	await renderSlide(activeBoot);

	// Klik na chevron strelice
	const chevrons = document.querySelectorAll('.chevron');
	const handleClick = async (ev) => {
		if (isAnimating) return;
		isAnimating = true;

		const slide = ev.currentTarget.dataset.slide;
		if (slide === 'right') {
			await nextSlide();
		} else {
			await previousSlide();
		}

		isAnimating = false;
	};

	chevrons.forEach((chevron) => chevron.addEventListener('click', handleClick));

	// Keyboard navigacija
	window.addEventListener('keydown', async (ev) => {
		if (isAnimating) return;
		isAnimating = true;

		if (ev.key === KEYBOARD_KEYS.right) {
			await nextSlide();
		} else if (ev.key === KEYBOARD_KEYS.left) {
			await previousSlide();
		}

		isAnimating = false;
	});
});
