const listRef = document.querySelector('#categories');
const listItemRef = listRef.children
console.log(`В списке ${listItemRef.length} категории.`);

const itemTitleRef = document.querySelectorAll('.item > h2');
const categoryListRef = document.querySelectorAll('.item > ul');
 


itemTitleRef.forEach((item, index) => { 
  console.log(`Категория: ${item.textContent} \nКоличество элементов: ${categoryListRef[index].children.length}`);
})
