var modalButton = document.querySelector('.modal-btn');
modalButton.addEventListener('click', handleClick);
var form = document.querySelector('form');
var spans = document.querySelectorAll('span');
window.addEventListener('click', handleClickedButton);
var $heading = document.querySelector('h3');
$heading.addEventListener('click', handleClickedButton);
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
      if (spans[i] === event.target) {
        spans[i].className = '';
        $heading.textContent = 'Scheduled Events for ' + event.target.textContent;
      }
    }
  }
}
var newObj = {
};
/* var dummyData = [
  {
    time: '8: 00',
    desc: 'Meeting with Jeff'
  },
  {
    time: '10: 00',
    desc: 'Take dog for a walk'
  }
];
/* function createTable() {
  var table = document.querySelector('table');
  // Creates Table Head
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var time = document.createElement('th');
  time.textContent = 'Time';
  var desc = document.createElement('th');
  desc.textContent = 'Description';
  tr.appendChild(time);
  table.appendChild(thead).appendChild(tr).appendChild(desc);
  // Creates Table Body
  var tbody = document.createElement('tbody');
  for (var i = 0; i < dummyData.length; i++) {
    var innerTr = document.createElement('tr');
    var timeTd = document.createElement('td');
    var descTd = document.createElement('td');
    timeTd.textContent = dummyData[i].time;
    descTd.textContent = dummyData[i].desc;
    innerTr.appendChild(timeTd);
    tbody.appendChild(innerTr).appendChild(descTd);
  }
  table.appendChild(tbody);
  return table;
 } */

// function renderEntriesToPage(event) {
//   for (var i = 0; i < spans[i].length; i++) {
//     createTable();
//   }
// }
// console.log(createTable());
