// tasks.js
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton'); // Get the "Add Task" button
    const taskDay = document.getElementById('taskDay').value;


    addTaskButton.addEventListener('click', function () {
        // Get task priority and description from the form
        console.log("Button clicked"); // Check if the button click event is detected
        const taskPriority = document.getElementById('taskPriority').value;
        const taskDay = document.getElementById('taskDay').value;
        console.log("Task Priority: ", taskPriority); // Check if the task priority is correctly obtained
        const taskDescription = document.getElementById('taskDescription').value;

        // Call the submitTask function with the task priority and description
        submitTask(taskPriority, taskDescription, taskDay);

        // Clear the form inputs
        document.getElementById('taskPriority').value = 'high';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDay').value = '';

    });

    function submitTask(priority, description, name, day) {
        // Create a new bubble task element
        const taskBubble = document.createElement('div');
        taskBubble.className = `bubble ${priority.toLowerCase()}`;
        taskBubble.innerHTML = `<p>${priority} Priority: ${name} - ${description} (Day: ${day})</p>`;
    
        // Append the new task bubble to the task list
        taskList.appendChild(taskBubble);
    }
});    
