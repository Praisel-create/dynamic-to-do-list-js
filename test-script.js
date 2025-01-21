document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize or load tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to Local Storage
    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage and populate the list
    function loadTasks() {
        tasks.forEach((taskText) => {
            createTaskElement(taskText);
        });
    }

    // Function to create and append a task element to the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach remove functionality to button
        removeButton.addEventListener('click', function () {
            // Remove task from DOM
            taskList.removeChild(listItem);

            // Update tasks array and Local Storage
            tasks = tasks.filter((task) => task !== taskText);
            saveTasksToLocalStorage();
        });

        // Append button and task to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Add task to tasks array
        tasks.push(taskText);

        // Save to Local Storage
        saveTasksToLocalStorage();

        // Create and display the task element
        createTaskElement(taskText);

        // Clear the input field
        taskInput.value = "";
    }

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add event listeners for adding tasks
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
