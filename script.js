// Run after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (!addButton || !taskInput || !taskList) {
        console.error("Error: Missing required DOM elements.");
        return; // Stop execution if elements are not found
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Check if input is empty
        if (taskText !== ""){
        // Create <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach an event to remove the task
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem); // Remove the task from the list
        });

        // Append the remove button to the task <li>
        listItem.appendChild(removeButton);

        // Append the task <li> to the task list
        taskList.appendChild(listItem);

        // Clear the input field for new tasks
        taskInput.value = "";
        } else {
            alert("Please enter a task!");
            return;
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Handle button click
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Handle "Enter" key press
        }
    });

    console.log("To-Do List application initialized successfully!");
});
