document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');
    const highPriorityButton = document.getElementById('high-priority');
    const mediumPriorityButton = document.getElementById('medium-priority');
    const lowPriorityButton = document.getElementById('low-priority');
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to remove all child elements from taskList
    function removeAllTasks() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

    // Clear all existing task boxes before recalling from local storage
    removeAllTasks();

    // Load saved tasks from local storage when the page loads
    savedTasks.forEach(function (task) {
        const { priority, description, icon } = task;
        console.log("Priority:", priority); // Debugging line

        if (priority) {
            createTaskBubble(priority, description, icon);
        }
    });

    // Add event listeners for priority buttons
    highPriorityButton.addEventListener('click', function () {
        setPriorityButtonSelected(highPriorityButton);
    });

    mediumPriorityButton.addEventListener('click', function () {
        setPriorityButtonSelected(mediumPriorityButton);
    });

    lowPriorityButton.addEventListener('click', function () {
        setPriorityButtonSelected(lowPriorityButton);
    });

    // When adding a new task and saving it to local storage
    addTaskButton.addEventListener('click', function () {
        // Get task priority, description, and icon from the selected priority button
        const taskPriority = getSelectedPriority();
        const taskDescription = document.getElementById('taskDescription').value;

        // Check if the task description is empty
        if (taskDescription.trim() === '') {
            alert('Please enter a task description.');
            return;
        }

        // Determine the icon path based on priority
        let taskIcon;
        switch (taskPriority.toLowerCase()) {
            case 'low':
                taskIcon = './assets/icons/low-priority.png';
                break;
            case 'medium':
                taskIcon = './assets/icons/medium-priority.png';
                break;
            case 'high':
                taskIcon = './assets/icons/high-priority.png';
                break;
            default:
                taskIcon = '';
        }

        // Call the createTaskBubble function with the task priority, description, and icon
        createTaskBubble(taskPriority, taskDescription, taskIcon);

        // Clear the form inputs
        document.getElementById('taskDescription').value = '';

        // Reset priority buttons
        resetPriorityButtons();

        // Save the task to local storage with the icon
        saveTaskToLocalStorage(taskPriority, taskDescription, taskIcon);
    });

    function saveTaskToLocalStorage(priority, description, icon) {
        // Get the existing saved tasks or initialize an empty array
        savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Add the new task to the existing tasks array
        savedTasks.push({ priority, description, icon });

        // Save the updated tasks back to local storage
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }

    function setPriorityButtonSelected(button) {
        // Remove "selected" class from all buttons
        highPriorityButton.classList.remove('selected');
        mediumPriorityButton.classList.remove('selected');
        lowPriorityButton.classList.remove('selected');

        // Add "selected" class to the clicked button
        button.classList.add('selected');
    }

    function getSelectedPriority() {
        if (highPriorityButton.classList.contains('selected')) {
            return 'high';
        } else if (mediumPriorityButton.classList.contains('selected')) {
            return 'medium';
        } else if (lowPriorityButton.classList.contains('selected')) {
            return 'low';
        } else {
            // Default to 'high' if no button is selected
            return 'high';
        }
    }

    function resetPriorityButtons() {
        // Remove "selected" class from all buttons
        highPriorityButton.classList.remove('selected');
        mediumPriorityButton.classList.remove('selected');
        lowPriorityButton.classList.remove('selected');
    }

    function getCurrentTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function createTaskBubble(priority, description, icon) {
        // Create a new bubble task element
        const taskBubble = document.createElement('div');

        // Set the CSS class based on priority
        const priorityClass = `${priority.toLowerCase()}-priority`;

        // Set the CSS class
        taskBubble.className = `bubble ${priorityClass}`;
        taskBubble.innerHTML = `
            <img src="${icon}" alt="Priority Icon" class="priority-icon">
            <p class="task-details">${description}</p>
            <p class="timestamp">${getCurrentTimestamp()}</p>
        `;

        // Add an event listener for hovering over the icon
        const priorityIcon = taskBubble.querySelector('.priority-icon');
        priorityIcon.addEventListener('mouseover', function () {
            this.src = './assets/icons/complete.png';
        });

        // Add an event listener for when the mouse leaves the icon area
        priorityIcon.addEventListener('mouseout', function () {
            this.src = icon; // Revert to the original image
        });

        // Add an event listener for when the user clicks to complete the task
        taskBubble.addEventListener('click', function () {
            const confirmCompletion = confirm('Are you sure you want to complete this task?');
            if (confirmCompletion) {
                // Remove the task bubble from the list
                taskList.removeChild(this);

                // Filter out the completed task from the savedTasks array
                savedTasks = savedTasks.filter(task => task.description !== description);

                // Update local storage with the filtered savedTasks array
                localStorage.setItem('tasks', JSON.stringify(savedTasks));
            }
        });

        // Append the task bubble to the task list
        taskList.appendChild(taskBubble);
    }
});
