// ===== Get HTML Elements =====
let form = document.getElementById("to-do");
let taskInput = document.getElementById("task");
let taskList = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    addTask();              
});

function addTask() {

    let taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
