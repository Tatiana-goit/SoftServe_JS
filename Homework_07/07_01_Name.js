const inputEl = document.querySelector('.name');
inputEl.addEventListener('input', onImputChange);

function onImputChange() {
  inputEl.value = inputEl.value.replace(/[0-9]/g, '');
}
