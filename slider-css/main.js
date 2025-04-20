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
	const boots = document.querySelector('.boots img');

	boots.style.transform = 'translateX(800px)';

	boots.classList.add('hidden');
	await sleep(500);
	boots.style.transform = 'translateX(-800px)';
	await sleep(500);
	boots.classList.remove('hidden');
	boots.style.transform = 'translateX(0)';
};

const nextSlide = () => {
	console.log('Next slide...');
	changeLogo();
	changeBoots();
};

const previousSlide = () => console.log('Previous slide...');
