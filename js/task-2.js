const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredintsRef = document.querySelector('#ingredients');

function createListItem(str){
  const item = document.createElement('li')
  item.textContent = str
  return item;
}

listIngredintsRef.append(...ingredients.map(createListItem))
