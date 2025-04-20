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
	const logoImg = logo.getElementsByTagName('img')[0];

	logo.style.transform = 'translateY(-164px)';

	await sleep(400);
	logoImg.src = `images/test-logo.png`;

	await sleep(800);
	logo.style.transform = '';
};

const changeBoots = async () => {
	const bootsImg = document.querySelector('.boots img');

	bootsImg.style.transform = 'translateX(800px)';

	bootsImg.classList.add('hidden');
	await sleep(500);
	bootsImg.style.transform = 'translateX(-800px)';
	await sleep(500);
	bootsImg.classList.remove('hidden');
	bootsImg.style.transform = '';
};

const nextSlide = () => {
	console.log('Next slide...');
	changeLogo();
	changeBoots();
};

const previousSlide = () => console.log('Previous slide...');
