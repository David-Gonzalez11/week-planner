var modalButton = document.querySelector('.modal-btn');
modalButton.addEventListener('click', handleClick);
var form = document.querySelector('form');
var spans = document.querySelectorAll('#week');
spans.addEventListener('click', handleClickedButton);
function handleClick(event) {
  if (event.target === modalButton) {
    form.classList.remove('hidden');

  } else {
    form.classList.add('hidden');
  }
}

function handleClickedButton(event) {
  var dataId = event.target.getAttribute('data-entry-id');

  if (event.target.tagName !== ('data-entry-id')) {

  }
}
