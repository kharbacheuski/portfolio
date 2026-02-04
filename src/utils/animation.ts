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

export const chaosLogos = () => {
  const logos = document.querySelectorAll<HTMLImageElement>('.logo');
  const container = document.querySelector<HTMLElement>('.stack_icons');

  if (!container) return;

  const placed: DOMRect[] = [];
  const padding = 20;
  const safePadding = padding + 20;

  logos.forEach(logo => {
    let placedCorrectly = false;
    let attempts = 0;

    while (!placedCorrectly && attempts < 300) {
      const x = Math.random() * (container.clientWidth - logo.offsetWidth);
      const y = Math.random() * (container.clientHeight - logo.offsetHeight);

      const rect = new DOMRect(
        x,
        y,
        logo.offsetWidth,
        logo.offsetHeight
      );

      const intersects = placed.some(r =>
        !(
          rect.right + safePadding < r.left ||
          rect.left - safePadding > r.right ||
          rect.bottom + safePadding < r.top ||
          rect.top - safePadding > r.bottom
        )
      );

      if (!intersects) {
        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
        logo.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

        placed.push(rect);
        placedCorrectly = true;
      }

      attempts++;
    }
  });
};