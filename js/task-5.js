const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', (event) => { 
  if (event.target.value) nameOutputRef.textContent = event.target.value
  else nameOutputRef.textContent = 'незнакомец'
})