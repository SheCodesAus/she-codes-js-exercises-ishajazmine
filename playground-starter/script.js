// console.log("Hello, world!");

// function showName() {
//     console.log("Ayeesha Fredericksen")
// }

// function showName() {
//     let username = document.getElementById("name-text").value;
//     console.log("Hi, " + username)
// }
// you can find the element id in the HTML code. We use the console.log function to log the function

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);

// push means to add. so to add item onto the end ofn the 'pets array:
pets.push("Ivy");

console.log(pets[0]);
// will show us the pet at position index 0 aka the first pet - chilli

console.log(pets[3]);
// will show us the pet at position index 0 aka the fouth pet - fleur


console.log(pets.length);
// shows you the length of the array

// console.log(pets[100])
// if you try to access something that doesnt exist will give you error 'undefined'

console.log("-------------")

for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}
// setting index variable to 0. let index = 0
// if index is less than pets length, add one to index 
// should loop through the array 

// EXAMPLE OF A FUNCTION
console.log("-------------")

function add(x,y){
    console.log(x + y)
}
add(5,5)

// FOR EACH FUNCTION looping through the array 
// a function that takes a function as it's argument
pets.forEach((pet) => {
    console.log(pet);
});



// CONDITIONALS EXAMPLE - 02/04/2022 - if
console.log("---------------")


// let pet = "Chilli";
// let pet = "NotChill";
// let pet = "Ivy";

// IF STATEMENT
// if (pet == "Chilli") {
//     console.log("OMG you are the cutest!");
// }
// ADDING ELSE STATEMENT
// if (pet == "Chilli") {
//     console.log("OMG you are the cutest!");
// } else {console.log("You're cute. But not as cute as Chilli.");
// }

//IF ELSE IF STATMENT
if (pet == "Chilli") {
    console.log("OMG you are the cutest!");
} else if (pet == "Ivy") 
{console.log("Naaaaw cute bow.");
} else {
    console.log("OMG so cute.");
}

// can stack else/if statements
// WAYS OF CONDITIONALS IN JS - TURNARIES SWITCH


