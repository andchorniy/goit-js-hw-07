const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', isValid);

function isValid(event) { 
    if (event.target.value.length === +event.target.dataset.length) {
        event.target.classList.add('valid')
    }
    else {
        event.target.classList.add('invalid')
    }
}