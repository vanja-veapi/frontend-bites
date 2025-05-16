import { changeBackground, changeBoots, changeLogo, changeText } from './anim.js';
import { fetchJSON } from './api.js';
import { KEYBOARD_KEYS } from './config.js';
import { removeLoader } from './loader.js';

window.addEventListener('load', async () => {
	const FOOTBALL_BOOTS = await fetchJSON('./data.json');
	let activeSlide = 0;
	let activeBoot = FOOTBALL_BOOTS[activeSlide];
	let isAnimating = false;

	removeLoader();

	const getNextSlideIndex = (currentIndex) =>
		currentIndex === FOOTBALL_BOOTS.length - 1 ? 0 : currentIndex + 1;

	const getPreviousSlideIndex = (currentIndex) =>
		currentIndex === 0 ? FOOTBALL_BOOTS.length - 1 : currentIndex - 1;

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
