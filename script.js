let step = 0;
const cards = document.querySelectorAll('.card');
const bar = document.querySelector('.bar');

function nextStep() {
  cards[step].classList.remove('active');
  step++;
  cards[step].classList.add('active');
  bar.style.width = (step + 1) * 33 + '%';
}
