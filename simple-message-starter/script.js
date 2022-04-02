window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    // creates div
    speechBubbleElement.classList.add("speech-bubble");
    // assigning the CLASS "speech bubble to the div we created"
    let messageBox = document.createElement("p");
    // creates parragraph
    messageBox.innerText = "...";
    // uuse inner text to get and/or set value
    messageBox.id = "message-box";
    // assign message-box CLASS to the parragraph
    speechBubbleElement.appendChild(messageBox);
    // append child means - have this inside of you- 

    let outputElement = document.getElementById("output");
    // getting what is in the output id in HTML
    outputElement.appendChild(speechBubbleElement);
    // put message in box in 

};


// window.onload = function () {
//     console.log("The page has loaded");
// }
// when browser loads the console will show "The page has loaded"


// test
// function showMessage() {
//     console.log("I am the show message function");
// }
// will always show strong ""I am the show message function"

// WITH ANY INPUT CALUE - NMEED .value (SEE BELOW)

// function showMessage() {
//     let message = document.getElementById("message-text").value;
//     console.log(message);
// }
// will show whatever you type in console ^^^

function showMessage() {
    let message = document.getElementById("message-text").value;
    // get message input value
    let name = document.getElementById("name-text").value;
    // getting the name input value
    let messageBox = document.getElementById("message-box");
    // then choosing parragraph box we created in message-box to display the elements
    messageBox.innerText = message + " " + name;
    // setting inner text of message box to the message we write 
}
// to make message people type into the input appear in the message 

// if you want info to be displayed ONLY in console need to use "console.log"
// above we made message appear in speech bubble so we didnt need to type console.log
