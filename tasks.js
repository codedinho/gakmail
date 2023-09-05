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

// Function to show a notification
function showNotification(message, duration) {
    // Create a notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Add the notification to the document
    document.body.appendChild(notification);

    // Set a timer to remove the notification after the specified duration
    setTimeout(function () {
        document.body.removeChild(notification);
    }, duration);
}

    // When adding a new task and saving it to local storage
    addTaskButton.addEventListener('click', function () {
        // Get task priority, description, and icon from the selected priority button
        const taskPriority = getSelectedPriority();
        const taskDescriptionValue = taskDescription.value.trim(); // Trim to remove leading/trailing white space

        // Check if the task description is empty
        if (taskDescriptionValue === '') {
            showNotification('Please enter a task description.', 2500);
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
        createTaskBubble(taskPriority, taskDescriptionValue, taskIcon);

        // Clear the form inputs
        taskDescription.value = '';

        // Reset priority buttons
        resetPriorityButtons();

        // Save the task to local storage with the icon
        saveTaskToLocalStorage(taskPriority, taskDescriptionValue, taskIcon);
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
    
        // Get the priority icon element
        const priorityIcon = taskBubble.querySelector('.priority-icon');
    
        // Add an event listener for hovering over the bubble
        taskBubble.addEventListener('mouseenter', function () {
            // Change the icon to './assets/icons/complete.png' on hover
            priorityIcon.src = './assets/icons/complete.png';
        });
    
        // Add an event listener for when the mouse leaves the bubble area
        taskBubble.addEventListener('mouseleave', function () {
            // Revert the icon back to the original when the hover ends
            priorityIcon.src = icon;
        });
    
        // Add an event listener for when the user clicks to complete the task
        taskBubble.addEventListener('click', function () {
            const modal = document.getElementById('myModal');
            const confirmButton = document.getElementById('confirmButton');
            const cancelButton = document.getElementById('cancelButton');
    
            modal.style.display = 'block';
    
            confirmButton.onclick = function () {
                // Remove the task bubble from the list
                taskList.removeChild(taskBubble);
    
                // Filter out the completed task from the savedTasks array
                savedTasks = savedTasks.filter(task => task.description !== description);
    
                // Update local storage with the filtered savedTasks array
                localStorage.setItem('tasks', JSON.stringify(savedTasks));
    
                modal.style.display = 'none'; // Close the modal
            };
    
            cancelButton.onclick = function () {
                modal.style.display = 'none'; // Close the modal
            };
        });
    
        // Append the task bubble to the task list
        taskList.appendChild(taskBubble);
    }    
});

// Add an event listener to the task sorter drop-down
const taskSorter = document.getElementById('taskSorter');
taskSorter.addEventListener('change', function () {
    const selectedSortOption = taskSorter.value;
    sortTasks(selectedSortOption);
});

// Function to sort tasks by priority
function sortTasks(sortOption) {
    const taskBubbles = document.querySelectorAll('.bubble');

    // Convert the NodeList to an array for easier sorting
    const taskArray = Array.from(taskBubbles);

    // Sort the tasks based on the selected option
    taskArray.sort(function (taskA, taskB) {
        const priorityA = getTaskPriority(taskA);
        const priorityB = getTaskPriority(taskB);

        if (sortOption === 'highToLow') {
            // Sort from high to low priority
            if (priorityA === 'high' && priorityB !== 'high') {
                return -1;
            } else if (priorityA !== 'high' && priorityB === 'high') {
                return 1;
            }
        } else if (sortOption === 'lowToHigh') {
            // Sort from low to high priority
            if (priorityA === 'low' && priorityB !== 'low') {
                return -1;
            } else if (priorityA !== 'low' && priorityB === 'low') {
                return 1;
            }
        }

        // Maintain the original order for tasks with the same priority
        return 0;
    });

    // Clear the task list
    removeAllTasks();

    // Append the sorted tasks back to the task list
    taskArray.forEach(function (task) {
        taskList.appendChild(task);
    });
}

// Function to get the priority of a task bubble
function getTaskPriority(taskBubble) {
    if (taskBubble.classList.contains('high-priority')) {
        return 'high';
    } else if (taskBubble.classList.contains('medium-priority')) {
        return 'medium';
    } else if (taskBubble.classList.contains('low-priority')) {
        return 'low';
    } else {
        // Default to 'high' if no priority class is found
        return 'high';
    }
}

// JavaScript code to prevent Enter key in task description textarea
const taskDescription = document.getElementById('taskDescription');

taskDescription.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

// JavaScript code to clear all active tasks and update local data
const clearTaskButton = document.getElementById('clearTaskButton');
const taskList = document.getElementById('taskList');

// Get the Clear Task Modal and buttons
const clearTaskModal = document.getElementById('clearTaskModal');
const confirmClearButton = document.getElementById('confirmClearButton');
const cancelClearButton = document.getElementById('cancelClearButton');


clearTaskButton.addEventListener('click', function () {
    // Open the Clear Task Modal when the Clear Task button is clicked
    clearTaskModal.style.display = 'block';
});

// Close the Clear Task Modal when clicking "No" or outside the modal
cancelClearButton.addEventListener('click', function () {
    clearTaskModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === clearTaskModal) {
        clearTaskModal.style.display = 'none';
    }
});

// Handle the clear action when clicking "Yes"
confirmClearButton.addEventListener('click', function () {
    // Clear all tasks from the UI
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear the local data (assuming you're using localStorage)
    localStorage.removeItem('tasks');

    // You may want to update any other data or perform additional actions as needed

    // Close the Clear Task Modal
    clearTaskModal.style.display = 'none';

});