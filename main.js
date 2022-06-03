var modalButton = document.querySelector('.modal-btn');
modalButton.addEventListener('click', handleClick);
var form = document.querySelector('form');
function handleClick(event) {
  if (event.target === modalButton) {
    form.classList.remove('hidden');

  } else {
    form.classList.add('hidden');
  }
}
