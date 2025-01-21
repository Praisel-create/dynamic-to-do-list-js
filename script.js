document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText == "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            removeButton.onclick = function () {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
         else {
            alert("Please enter a task!");
            return;
        }
    }

    // Event listeners for adding tasks
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});