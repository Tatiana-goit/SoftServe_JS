const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.button-open');
const btnClose = document.querySelector('.button-close');
const close = document.querySelector('.close');

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('visible');
}

function closeModal() {
  modal.classList.remove('visible');
}
