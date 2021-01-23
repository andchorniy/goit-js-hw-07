const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', render)
destroyBtnRef.addEventListener('click', destroyBoxes)


function render() { 
    createBoxes(inputRef.value)
}

function createBoxes(amount) { 
    for (let i = 1; i <= amount; i += 1) {
        const element = document.createElement('div')
        element.style.width = `${20 + i*10}px`
        element.style.height = `${20 + i*10}px`
        element.style.backgroundColor = getRandomColor()
        boxesRef.appendChild(element)
    } 
}

function destroyBoxes() { 
    const boxToRemove = boxesRef.children
    console.log(boxToRemove);
    while (boxToRemove.length > 0) {
        boxesRef.removeChild(boxToRemove[0])
    }

}

function getRandomColor()  { 
  function color() { 
    return Math.floor(Math.random() * 256)
  }
  return `rgb(${color()}, ${color()}, ${color()})`
}
