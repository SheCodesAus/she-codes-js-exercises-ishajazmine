// create function 
// function add() {
//     console.log("add function");
// }
// now go back to html and include onclick="add()"


// get number 0 to show in console
function add() {
    let numberElement = document.getElementById("number");
    // to get the number inside 
    let number = numberElement.innerText;
    // because we're dealing with parragraph we need to use a differnet field to get the node
    console.log(number);
}

// now adding 1 to the existing number
function add(step) {
    let numberElement = document.getElementById("number");
    // to get the number inside 
    let number = numberElement.innerText;
    // because we're dealing with parragraph we need to use a differnet field to get the node
    number = parseInt(number) + step;
    // adds one to the number
    numberElement.innerText = number;
    console.log(number);
}
// in HTML if you change the value 1 to 10, it will change how the function works and the function will add by 10 instead of 1.

// subtraction function
function minus(step) {
    let numberElement = document.getElementById("number");
    // to get the number inside 
    let number = numberElement.innerText;
    // because we're dealing with parragraph we need to use a differnet field to get the node
    number = parseInt(number) - step;
    // adds one to the number
    numberElement.innerText = number;
    console.log(number);
}

// function addNumber(step) {
//     let numberElement = document.getElementById("number").value;
//     number = parseInt(number) + step;
//     console.log(number); 
// }
// not working