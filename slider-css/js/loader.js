export const removeLoader = () => {
	const loading = document.querySelector('#loading');
	if (!loading) return;

	setTimeout(() => loading.classList.add('fade-out'), 500);
	setTimeout(() => loading.remove(), 2000);
};
