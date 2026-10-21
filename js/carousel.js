const carousel = document.querySelector('.carousel');
const [prev, next] = document.querySelectorAll('.spoon');

// Wrap each image with a caption taken from its alt text
carousel.querySelectorAll('img').forEach(img => {
  const figure = document.createElement('figure');
  const caption = document.createElement('figcaption');
  caption.textContent = img.alt;
  caption.ariaHidden = 'true'; // alt text is already read out
  img.replaceWith(figure);
  figure.append(img, caption);
});

// Move one slide; at either end, loop round
function move(dir) {
  const step = carousel.firstElementChild.offsetWidth + parseFloat(getComputedStyle(carousel).gap);
  const end = carousel.scrollWidth - carousel.clientWidth;

  if (dir > 0 && carousel.scrollLeft >= end - 5) carousel.scrollTo({ left: 0 });
  else if (dir < 0 && carousel.scrollLeft <= 5) carousel.scrollTo({ left: end });
  else carousel.scrollBy({ left: dir * step });
}

prev.addEventListener('click', () => move(-1));
next.addEventListener('click', () => move(1));
