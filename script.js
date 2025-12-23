// Smooth scroll for internal navigation and active-link highlighting
document.addEventListener('DOMContentLoaded', function () {
	console.log('Welcome to my portfolio website');

	const links = document.querySelectorAll('nav a');
	links.forEach(link => {
		link.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href.startsWith('#')) {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// Update active nav link on scroll
	const sections = document.querySelectorAll('main section[id]');
	function onScroll() {
		const scrollPos = window.scrollY + 80;
		sections.forEach(sec => {
			const top = sec.offsetTop;
			const height = sec.offsetHeight;
			const id = sec.getAttribute('id');
			const link = document.querySelector(`nav a[href="#${id}"]`);
			if (link) {
				if (scrollPos >= top && scrollPos < top + height) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			}
		});
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
});