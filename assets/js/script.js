var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  //add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);

// var arr = ["akita", "shiba", "malinoi", "chow chow", "pug"];

// for (let i = 0; i < arr.length; i = i + 2) {
//   console.log(arr[i]);
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(i);
// }

// var number = [];

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) {
//     number.push("hello");
//   } else if (i % 2 === 1) {
//     number.push("odd");
//   } else {
//     number.push("even");
//   }
// }
// console.log(number);

// console.log(3 % 2);
