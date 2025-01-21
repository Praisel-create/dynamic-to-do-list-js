document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for task
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Function to add a task to the list
    function addTask() {
        // Get and trim the value of the task input
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the <li> element from the task list
        };

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});