const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value))
destroyBtnRef.addEventListener('click', destroyBoxes)


let boxSize = 30

function createBoxes(amount) { 
    for (let i = 1; i <= amount; i += 1) {
        const element = document.createElement('div')
        element.style.width = `${boxSize}px`
        element.style.height = `${boxSize}px`
        element.style.backgroundColor = getRandomColor()
        boxesRef.appendChild(element)
        boxSize += 10
    } 
}

function destroyBoxes() { 
    const boxesToRemove = boxesRef.children
    const arrBoxes = Array.from(boxesToRemove)
    arrBoxes.forEach((box)=> box.remove())
    boxSize = 30

}

function getRandomColor()  { 
  function color() { 
    return Math.floor(Math.random() * 256)
  }
  return `rgb(${color()}, ${color()}, ${color()})`
}
