export const loadClassName = () => {
	const elements = Array.from(
		document.querySelectorAll(
			'[data-animate], [data-animate-top], [data-animate-bottom], [data-animate-left], [data-animate-right], [data-animate-scale]'
		)
	);

	const loadClassName = (el: Element) => {
		el.classList.add('__animated');
	};

	const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				loadClassName(entry.target);
				observer.unobserve(entry.target);
			}
		});
	};

	if (window['IntersectionObserver']) {
		const lazyImageObserver = new IntersectionObserver(handleIntersect);
		elements.forEach((element) => lazyImageObserver.observe(element));
	} else {
		elements.forEach((element) => loadClassName(element));
	}
};