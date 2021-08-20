const nameELem = document.getElementById('name');
const wishElem = document.getElementById('wish');
const submitBtn = document.getElementById('submit-btn');
const cleanBtn = document.getElementById('clean-btn');
const msgContainer = document.getElementById('message');
const emptyMsg = document.getElementById('empty-wishes');
const wishes = document.getElementById('wishes');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  msgContainer.innerHTML = `Hola ${nameELem.value}, tu deseo ya fue enviado a Papá Noel!`;
  const li = document.createElement('li');
  li.innerHTML = wishElem.value;
  wishes.appendChild(li);
  emptyMsg.classList.add('d-none');
  nameELem.value='';
  wishElem.value='';
});

cleanBtn.addEventListener('click', event=> {
  event.preventDefault();
  msgContainer.innerHTML='';
  emptyMsg.classList.remove('d-none');
  while (wishes.firstChild) {
    wishes.removeChild(wishes.firstChild)
  };

})