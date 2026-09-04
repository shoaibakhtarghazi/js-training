let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let emptyMessage = document.getElementById("emptyMessage");

let tasks = [];

function showTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.name;

        if (task.completed) {
            span.style.textDecoration = "line-through";
        }

        span.addEventListener("click", function() {
            task.completed = !task.completed;
            showTasks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            showTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function addTask() {

    let taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    let task = {
        name: taskName,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    showTasks();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});

showTasks();