const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

const counterValue = +counterValueRef.textContent

function increment() { 
  counterValueRef.textContent ++
 return 
}
function decrement() { 
    counterValueRef.textContent --

  return 
}

decrementBtnRef.addEventListener('click', decrement)
incrementBtnRef.addEventListener('click', increment)

