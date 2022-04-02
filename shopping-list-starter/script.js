// // goal is to add individual items to shopping list

// let shoppingListItems = ["milk", "eggs", "bread"]

// // dom sdocument object modle = browser 

// // .document is the nodes inside the browser

// // document - lets us access the node in js and the "shopping-list-items" element is found in HTML CODE
// let listElement = document.getElementById("shopping-list-items");
// // getting shopping list items - by accessing the node^

// shoppingListItems.forEach((item) => {
//     console.log(item)

//     let itemElement = document.createElement("li");
//     // creating li elements
//     itemElement.innerText = item;
//     // always inner text - telling it where to put the li element. unless it's an input^ setting li text to be whatever is in shopping lsit
//     listElement.appendChild(itemElement);
//     // adds whatever the li is, to the list element
//     updateItems();
// });


// // now to make the uinput button add input to console list 
// // step 1 - add to HTML: onclick="addItem()" to the submit button
// function addItem() {
//     // let item = document.getElementById("new-item-text");
//     // LET - Stops peopkle from changing element type e.g. string, int, etc. 
//     const item = document.getElementById("new-item-text");
//     // ^IS A CONSTANENT - YOU CANT CHANGE. A VALUE THAT CANT CHANGE
//     // document. means we're accessing 
//     // because new-item-text is an input, we need to add .value after it - new item text is in the HTML
//     shoppingListItems.push(item.value);
//     updateItems();
//     item.value = "";
//     // push means add. add item to variable called item 
//     // console.log(shoppingListItems);
//     // showing the item in the shoppinlistitems array

//     // new item wont show on array unless you call the code to run ShoppingItems AGAIN. 
//     // ^ tells code to run update items fuction. so it runs items 
//     // deleteAllItems();
// }

// // SHOW INPUT ITEM ON LIST - CALL FUNCTION AGAIN

// function updateItems() {
//     let listElement = document.getElementById("shopping-list-items");
//     listElement.innerHTML = "";
//     // ^set inner htmkl to empty string before we loop, wont add existing list PLUS loop through items
//     shoppingListItems.forEach((item) => {
//         let itemElement = document.createElement("li");
//         itemElement.innerText = item;
//         listElement.appendChild(itemElement);
//         updateItems();
// }

// // CHALLENGE 1 : Add button to list that clears entire list on submit 

// function deleteAllItems() {
//     shoppingListItems = [];
//     // use empty array list
//     // console.log(shoppingListItems);
//     updateItems();
// }

// // shoppingItems.length = 0;
// // ^ other way to remove all items. 

// //

// Write a loop to add items to the list
let shoppingListItems = ["milk", "eggs", "bread"];
// Assign the element 'list' to a variable called 'listElement'
let listElement = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

// After adding 'onclick' feat to Submit button in HTML, write function to add items when clicking
function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems()
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

function clearList() {
    shoppingListItems = [];
    updateItems();
}