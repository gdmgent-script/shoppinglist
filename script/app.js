// DOM
const shoppingList = document.getElementById('shoppinglist');
const btnAddItem = document.getElementById('btnadditem');
const inputAddItem = document.getElementById('additem');
const btnClearStorage = document.getElementById('btnclearstorage');

// Empty shoppinglist array
let existingItems = [];

// function Create listitem
const createListItem = itemContent => {
  const listItem = document.createElement('li');
  listItem.innerText = itemContent;
  return listItem;
};

if (
  existingItems.length === 0 &&
  localStorage.getItem('shoppingList') != null
) {
  // array empty but storage exist
  existingItems = localStorage.getItem('shoppingList').split(',');
  existingItems.forEach(item => {
    // Fill list with storage items
    shoppingList.appendChild(createListItem(item));
  });
}

const addToShoppingList = () => {
  shoppingList.appendChild(createListItem(inputAddItem.value));
  // Add item to Array, reassign array to storage
  existingItems.push(inputAddItem.value);
  localStorage.setItem('shoppingList', existingItems);
  // Empty input field
  inputAddItem.value = '';
};

// Eventlistener for enter and click
btnAddItem.addEventListener('click', addToShoppingList);
inputAddItem.addEventListener('keypress', e => {
  if (e.code === 'Enter') {
    addToShoppingList();
  }
});

// Eventlistener delete storage shoppinglist and empty list
btnClearStorage.addEventListener('click', () => {
  localStorage.removeItem('shoppingList');
  // .clear removes all storage
  // localStorage.clear();

  // Empty array and ul-shoppinglist
  existingItems = [];
  shoppingList.innerHTML = '';
});
