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

const changeLogo = () => {
	const logo = document.querySelector('.logo');
	const logoImg = logo.getElementsByTagName('img')[0];
	console.log(logoImg);
	logo.style.transform = 'translateY(-164px)';

	const logoPath = logoImg.src.split('/')[3];
	setTimeout(() => {
		logoImg.src = `${logoPath}/test-logo.png`;
	}, 400);

	setTimeout(() => {
		logo.style.transform = '';
	}, 800);
	// translateY(-124px)
};

const nextSlide = () => {
	console.log('Next slide...');
	changeLogo();
};

const previousSlide = () => console.log('Previous slide...');
