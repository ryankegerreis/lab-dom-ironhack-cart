
function deleteItem(e){


}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(price) {
// Button clicks and returns a value.

// NEXTSTEPS: Create output area for price in
let total = 0

  document.getElementById("calculate-price-button").onclick = console.log("Button works");

  let valueOutput = document.getElementsByClassName("input")[0]

  let quantity = valueOutput.value

console.log(quantity * 5)

total = price * quantity;

}
 
function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calculate-price-button');

  console.log(calculatePriceButton)
  var createItemButton = document.getElementById('new-item-create');

  console.log(createItemButton)
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(deleteButtons)
  calculatePriceButton.onclick = getTotalPrice;


  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


//=============== Button Click Event ===================

// var counter {
//   // manipulate the innerHTML of the element targeted
//   theCounter += 1;
//   console.log("I Clicked the Button!!!!!");

//   // return the newly updated number to the original element
//   counter.innerHTML = theCounter;
// }
