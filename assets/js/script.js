let formEl = document.querySelector("task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
    //adding the .preventDefault stops the browser from carrying out its default behavior, whic is to refresh every time
    event.preventDefault();
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 

  }; 

//we changed from "click" to "submt" since we made the whole form the event listeners, 
//if we did "click" then any time any where the form is clicked on, it would cause it to go off
//so we specified its only when submit it hit 
formEl.addEventListener("submit" createTaskHandler);
