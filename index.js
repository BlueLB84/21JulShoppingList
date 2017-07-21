
const STORE = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: true},
  {name: "bread", checked: false}
];

const SHOPPING_LIST_ELEMENT_CLASS = '.js-shopping-list';


function generateShoppingItemsString() {
  console.log("Generating shopping list element");

  // generate an <li> with the right attributes
  // for each item in the list.
  
  return '<li>hello world</li><li>goodbye world</li>';
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString();
  // insert that HTML into the DOM
  $(SHOPPING_LIST_ELEMENT_CLASS).html(shoppingListItemsString);
}


function handleNewItemSubmit() {
  // listen for users adding a new shopping list item, then add
  // to list and render list 
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // listen for users checking/unchecking list items, and
  // render them checked/unchecked accordingly
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // Listen for when users want to delete an item and 
  // delete it
  console.log('`handleDeleteItemClicked` ran')
}

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);

