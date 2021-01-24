const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = +counterValueRef.textContent

function increment() { 
  counterValue += 1
 return counterValueRef.textContent = counterValue
}
function decrement() { 
    counterValue -= 1
  return counterValueRef.textContent = counterValue
}

decrementBtnRef.addEventListener('click', decrement)
incrementBtnRef.addEventListener('click', increment)

