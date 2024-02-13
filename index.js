document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById("task-input");
    const prioritySelect = document.getElementById("priority-select");
    const deadlineInput = document.getElementById("deadline-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskListUl = document.getElementById("task-list-ul");

    addTaskBtn.addEventListener("click", function () {
        const task = taskInput.value.trim();
        const priority = prioritySelect.value;
        const deadline = deadlineInput.value;

        if (task === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.classList.add("task-list-item"); 
        li.innerHTML = `<div class="task-content"><strong>Task:</strong> ${task}, <strong>Priority:</strong> ${priority}, <strong>Deadline:</strong> ${deadline}</div><div class="task-actions"><button class="mark-done-btn">Mark Done</button></div>`;
        taskListUl.appendChild(li);

        
        taskInput.value = "";
        prioritySelect.value = "top";
        deadlineInput.value = "";
    });

    
    taskListUl.addEventListener('click', function(event) {
        if (event.target.classList.contains('mark-done-btn')) {
            const listItem = event.target.closest('.task-list-item');
            listItem.style.color = 'orange'; 
        }
    });
});
