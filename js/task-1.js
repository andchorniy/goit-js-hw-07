const listRef = document.querySelector('#categories');
const listItemRef = listRef.children
console.log(`В списке ${listItemRef.length} категории.`);

const itemTitleRef = document.querySelectorAll('.item > h2');
const categoryListRef = document.querySelectorAll('.item > ul');
 

const arrayTitle = Array.from(itemTitleRef)
const arrayLists = Array.from(categoryListRef)


arrayTitle.forEach((item, index) => { 
  console.log(`Категория: ${item.textContent} \nКоличество элементов: ${arrayLists[index].children.length}`);
})
