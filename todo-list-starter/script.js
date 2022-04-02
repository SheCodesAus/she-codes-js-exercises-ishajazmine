// // // // step 1 - create an array 'todoTasksText
// // // let todoTasksText = ["Walk Chilli", "Make Dinner"];
// // // // the status below matches the todotasktext above - if 2 elements in todotasktext should have 2 elements in status below
// // // let todoTasksStatus = [false, true];
// // // let todoList = document.getElementById("todo-list");

// // // // loop through array and add elements to page (task is function)
// // // todoTasksText.forEach((task, index) => {
// // // // gives the task name and the index position in the list

// // //     // TEXT ELEMENT
// // //     let newTodoTaskTextElement = document.createElement("p");
// // //     // create parragraph called todotextelement
// // //     newTodoTaskTextElement.innerText = task;
// // //     // assign inner text of the parragraph to the task (task element below)

// // //     // checking the todotasktext against the todotaskstatus (css crosses out false todo's)
// // //     if (todoTasksStatus[index] == true) {
// // //         // dont need ==true because the code will assume statment is true. can still leave it in though
// // //         newTodoTaskTextElement.classList.add("complete");
// // //     }

// // //     // TASK ELEMENT:
// // //     let newTodoTaskElement = document.createElement("li");
// // //     // grab the list item
// // //     newTodoTaskElement.appendChild(newTodoTaskTextElement);
// // //     // appens the parragraph to the list

// // //     // CREATING 'COMPLETE BUTTON' ELEMENT SO TASKS CAN BE MARKED AS COMPLETE:  - create button in JS only if content is DYNAMIC
// // //     let completeButtonElement = document.createElement("input");
// // //     // create a new element 'completeButtonElement' 
// // //     completeButtonElement.type = "button";
// // //     // ^change input to type = button 
// // //     // (mainly used for forms. button acts like a div. so you can CONVERT IMAGES TO BUTTON - buttons allow you to style better rather than keeping something as an input)
// // //     completeButtonElement.value = "Completed";
// // //     // setting value to completed
// // //     newTodoTaskElement.appendChild(completeButtonElement);
// // //     // ON CLICK BUTTON 
// // //     completeButtonElement.onclick = function () {
// // //         toggleComplete(index);
// // //     };


// // //     todoList.appendChild(newTodoTaskElement);
// // //     // append the list element itself
// // // });

// // // // CHECKING IF TASK IS COMPLETE BEFOREHAND
// // // // function isTodoComplete (task) {
// // // //     return task == true;
// // // // }


// // // // NOW UPDATE USER INTERFACE - CHANGE WHAT USERS SEE
// // // function createNewTodoTaskElement(task, index) {
// // //     let newTodoTaskTextElement = document.createElement("p");
// // //     newTodoTaskTextElement.innerText = task;
    
// // //     todoList.appendChild(newTodoTaskElement);
// // //     return newTodoTaskElement;
// // // }

// // // todoTasksText.forEach((task, index) => {
// // //     createNewTodoTaskElement(task, index);
// // // });

// // // // ADD FUNCTION TO TOGGLE COMPLETE BUTTON - will only change in the console 
// // // function toggleComplete(index) {
// // //     if (todoTasksStatus[index] == false) {
// // //         todoTasksStatus[index] = true;
// // //     } else {
// // //         todoTasksStatus[index] = false;
// // //     }
// // //     console.log(todoTasksStatus);
// // // }


// // let todoTaskText = [];
// // let todoTaskStatus = [];
// // updateTodoList();

// // function addTask() {}

// // function updateTodoList() {
// //   let todoList = document.getElementById("todo-list");
// //   todoList.innerHTML = "";
// //   todoTaskText.forEach((task, index) => {
// //     let newTodoTaskElement = createNewTodoItemElement(task, index);
// //     todoList.appendChild(newTodoTaskElement);
// //   });
// // }

// // function createNewTodoItemElement(task, index) {
// //   let newTodoTaskTextElement = document.createElement("p");
// //   newTodoTaskTextElement.innerText = task;

// //   if (todoTaskStatus[index] == true) {
// //     newTodoTaskTextElement.classList.add("complete");
// //   }

// //   let newTodoTaskElement = document.createElement("li");
// //   newTodoTaskElement.appendChild(newTodoTaskTextElement);

// //   let completeButtonElement = document.createElement("input");
// //   completeButtonElement.type = "button";
// //   completeButtonElement.value = "Completed";
// //   completeButtonElement.onclick = function () {
// //     toggleComplete(index);
// //   };
// //   newTodoTaskElement.appendChild(completeButtonElement);

// //   return newTodoTaskElement;
// // }

// // function toggleComplete(index) {
// //   // If the to do is not complete
// //   if (todoTaskStatus[index] == false) {
// //     // Set the todo to complete
// //     todoTaskStatus[index] = true;
// //   } else {
// //     // Else the todo is already complete so set it to incomplete
// //     todoTaskStatus[index] = false;
// //   }
// //   updateTodoList();
// // }

// // function addTask() {
// //     let newTask = document.getElementById("new-task-text");
// //     if (newTask.value) {
// //         todoTasksText.push(newTask.value);
// //         todoTasksStatus.push(false);
// //         newTask.value = "";
// //         console.log(todoTasksText);
// //         updateTodoList();
// //     }
// // }

// let todoTaskText = [];
// let todoTaskStatus = [];
// let todoDueDate = [];

// function addTask() {
//   let newTask = document.getElementById("new-task-text");
//   if (newTask.value) {
//     todoTaskText.push(newTask.value);
//     todoTaskStatus.push(false);
//     newTask.value = "";
//     updateTodoList();
//   }
// }

// function updateTodoList() {
//   let todoList = document.getElementById("todo-list");
//   todoList.innerHTML = "";
//   todoTaskText.forEach((task, index, due) => {
//     let newTodoTaskElement = createNewTodoItemElement(task, index, due);
//     todoList.appendChild(newTodoTaskElement);
//   });
// }

// function createNewTodoItemElement(task, index, due) {
//   let newTodoTaskTextElement = document.createElement("p");
//   newTodoTaskTextElement.innerText = task;

//   if (todoTaskStatus[index] == true) {
//     newTodoTaskTextElement.classList.add("complete");
//   }

//   let newTodoTaskElement = document.createElement("li");
//   newTodoTaskElement.appendChild(newTodoTaskTextElement);

//   let completeButtonElement = document.createElement("input");
//   completeButtonElement.type = "button";
//   completeButtonElement.value = "Completed";
//   completeButtonElement.onclick = function () {
//     toggleComplete(index);
//   };
//   newTodoTaskElement.appendChild(completeButtonElement);

//   // ADDING DUE DATE
//   let newDueDateTextElement = document.createElement("p");
//   newTodoTaskTextElement.innerText = due;

//   let newDueDateElement = document.createElement("dd");
//   newTodoTaskElement.appendChild(newDueDateElement);
//   }


//   return newTodoTaskElement;
// }

// function toggleComplete(index) {
//   // If the to do is not complete
//   if (todoTaskStatus[index] == false) {
//     // Set the todo to complete
//     todoTaskStatus[index] = true;
//   } else {
//     // Else the todo is already complete so set it to incomplete
//     todoTaskStatus[index] = false;
//   }
//   updateTodoList();
// }

// updateTodoList();

let todoTaskText = [];
let todoTaskStatus = [];

function addTask() {
  let newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTaskText.push(newTask.value);
    todoTaskStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
}

function updateTodoList() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoTaskText.forEach((task, index) => {
    let newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  });
}

function createNewTodoItemElement(task, index) {
  let newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  let completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  return newTodoTaskElement;
}

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

updateTodoList();