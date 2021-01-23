const listRef = document.querySelector('#categories');
const listItemRef = listRef.children
console.log(`В списке ${listItemRef.length} категории.`);

const itemTitleRef = document.querySelectorAll('.item > h2');
const categoryListRef = document.querySelectorAll('.item > ul');
 

const arrayTitle = Array.from(itemTitleRef)
const arrayLists = Array.from(categoryListRef)


for (let i = 0; i < arrayTitle.length; i+=1 ) { 
  const title = arrayTitle[i].textContent;
  const elements = arrayLists[i].children.length;
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${elements}`);

}

