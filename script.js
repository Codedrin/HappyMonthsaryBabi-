onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const starContainer = document.querySelector('.stars');
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Random positions for the stars
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  // Random delay and duration for each star to make them appear more naturally
  const delay = Math.random() * 5 + 's';
  const duration = Math.random() * 10 + 5 + 's';

  star.style.animationDelay = delay;
  star.style.animationDuration = duration;

  starContainer.appendChild(star);
}