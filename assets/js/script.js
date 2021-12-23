var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
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
