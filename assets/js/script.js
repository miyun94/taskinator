let formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 


var createTaskHandler = function(event) { 
    //adding the .preventDefault stops the browser from carrying out its default behavior, whic is to refresh every time
    event.preventDefault();

    //using [] in selector, we are selecting html element by one of its attributes
    //i.e. in this case the one with the task-name attribute
    let taskNameInput = document.querySelector("input[name='task-name']").Value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create item list
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 

    //create div to hold task infor and add to list item 
    let taskInfoEl = document.createElement("div"); 
    //give it a class name 
    taskInfoEl.className = "task-info"; 
    //add HTML content to div
    taskInfoEl.innerHTML="<h3 class = 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput "</span>";
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl); 
  }; 

//we changed from "click" to "submt" since we made the whole form the event listeners, 
//if we did "click" then any time any where the form is clicked on, it would cause it to go off
//so we specified its only when submit it hit 
formEl.addEventListener("submit" createTaskHandler);