document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');
    const highPriorityButton = document.getElementById('high-priority');
    const mediumPriorityButton = document.getElementById('medium-priority');
    const lowPriorityButton = document.getElementById('low-priority');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

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

    addTaskButton.addEventListener('click', function () {
        // Get task priority and description from the selected priority button
        const taskPriority = getSelectedPriority(); // Make sure this is correctly set

        const taskDescription = document.getElementById('taskDescription').value;
        console.log(taskDescription); // Debugging line

        
        // Check if the task description is empty
        if (taskDescription.trim() === '') {
            alert('Please enter a task description.');
            return;
        }
    
        // Call the createTaskBubble function with the task priority and description
        createTaskBubble(taskPriority, taskDescription); // Make sure taskPriority is defined
    
        // Clear the form inputs
        document.getElementById('taskDescription').value = '';
    
        // Reset priority buttons
        resetPriorityButtons();
    });
    

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

    console.log("Icon Image Path:", iconImage);


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

    function createTaskBubble(priority, description) {
        // Add a debugging line to check the value of priority
        console.log("Priority:", priority);
    
        // Create a new bubble task element
        const taskBubble = document.createElement('div');
    
        // Determine the CSS class based on priority
        let priorityClass;
        let iconImage; // Define iconImage here
        switch (priority.toLowerCase()) {
            case 'low':
                priorityClass = 'low-priority';
                iconImage = `./assets/icons/${priority.toLowerCase()}-priority.png`;
                break;
            case 'medium':
                priorityClass = 'medium-priority';
                iconImage = `./assets/icons/${priority.toLowerCase()}-priority.png`;
                break;
            case 'high':
                priorityClass = 'high-priority';
                iconImage = `./assets/icons/${priority.toLowerCase()}-priority.png`;
                break;
            default:
                priorityClass = '';
                iconImage = '';
        }
    
        // Add a debugging line to check the value of iconImage
        console.log("Icon Image Path:", iconImage);
    
        // Set the CSS class
        taskBubble.className = `bubble ${priorityClass}`;
        taskBubble.innerHTML = `
            <img src="${iconImage}" alt="Priority Icon" class="priority-icon">
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
            this.src = iconImage; // Revert to the original image

            // Add a debugging line to check the src attribute
            console.log("Image Source:", this.src);
        });


        // Add an event listener for when the user clicks to complete the task
        taskBubble.addEventListener('click', function () {
            const confirmCompletion = confirm('Are you sure you want to complete this task?');
            if (confirmCompletion) {
                // Remove the task bubble from the list
                taskList.removeChild(this);

                // Remove the completed task from local storage
                const updatedTasks = savedTasks.filter(task => task.description !== description);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            }
        });

        // Append the task bubble to the task list
        taskList.appendChild(taskBubble);

        // Save the updated task list to local storage
        saveTasksToLocalStorage();
    }

    // Load saved tasks from local storage when the page loads
    savedTasks.forEach(function (task) {
        const { priority, description } = task;
        console.log("Priority:", priority); // Debugging line

        if (priority) {
            createTaskBubble(priority, description);
        }
    });


    function saveTasksToLocalStorage() {
        // Get the current task list from the page
        const tasks = Array.from(taskList.querySelectorAll('.bubble')).map(taskBubble => {
            const priority = taskBubble.className.split(' ').find(className => ['low-priority', 'medium-priority', 'high-priority'].includes(className));
            const description = taskBubble.querySelector('.task-details').textContent;
            return { priority, description };
        });

        // Save the task list to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
