const nameELem = document.getElementById('name');
const wishElem = document.getElementById('wish');
const submitBtn = document.getElementById('submit-btn');
const cleanBtn = document.getElementById('clean-btn');
const msgContainer = document.getElementById('message');
const emptyMsg = document.getElementById('empty-wishes');
const wishes = document.getElementById('wishes');

nameELem.addEventListener('change', () => {
  submitBtn.removeAttribute('disabled');
  document.getElementById('msg-error-name').innerHTML = '';
})

wishElem.addEventListener('change', () => {
  submitBtn.removeAttribute('disabled');
  document.getElementById('msg-error-wish').innerHTML = '';
})


submitBtn.addEventListener('click', event => {
  event.preventDefault();

  if(nameELem.value && wishElem.value){
    msgContainer.innerHTML = `Hola ${nameELem.value}, tu deseo ya fue enviado a Papá Noel!`;
    wishes.innerHTML += `<li>${wishElem.value}</li>`;
    emptyMsg.classList.add('d-none');
    nameELem.value='';
    wishElem.value='';
  } else {
      submitBtn.setAttribute('disabled', '');

      if(!nameELem.value) {
        document.getElementById('msg-error-name').innerHTML = 'Debe ingresar su nombre';
      } 

      if(!wishElem.value) {
        document.getElementById('msg-error-wish').innerHTML = 'Debe ingresar su deseo';
      }
  }
  
});

cleanBtn.addEventListener('click', () => {
  submitBtn.removeAttribute('disabled');

  msgContainer.innerHTML='';

  emptyMsg.classList.remove('d-none');

  document.getElementById('msg-error-name').innerHTML = '';
  document.getElementById('msg-error-wish').innerHTML = '';

  wishes.innerHTML = '';
})