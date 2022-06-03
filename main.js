var modalButton = document.querySelector('.modal-btn');
modalButton.addEventListener('click', handleClick);
var form = document.querySelector('form');
var spans = document.querySelectorAll('span');
spans.addEventListener('click', handleClickedButton);
function handleClick(event) {
  if (event.target === modalButton) {
    form.classList.remove('hidden');

  } else {
    form.classList.add('hidden');
  }
}

function handleClickedButton(event) {
  /* var dataId = event.target.getAttribute('data-entry-id'); */

  if (event.target.tagName !== ('data-entry-id')) {
    for (var i = 0; i < spans.length; i++) {
      spans[i].className = 'hidden';
      if (spans[i] === event.target) {
        spans[i].className = '';
      } else {
        spans[i].className = 'hidden';
      }
    }
  }
}
