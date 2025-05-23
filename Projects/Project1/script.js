// Select the button and the list

const addTaskButton = document.getElementById('newTask');
const todoList = document.getElementById('todolist');

// Add event listener to the button
addTaskButton.addEventListener('click', () => {
    // Create a new <li> element
    const newTask = document.createElement('li');
    
    // Add text content to the <li>
    newTask.textContent = `Task ${todoList.children.length + 1}`;
    
    // Append the new <li> to the <ul>
    todoList.appendChild(newTask);
});