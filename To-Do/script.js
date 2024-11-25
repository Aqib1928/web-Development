const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task';

    const span = document.createElement('span');
    span.textContent = text;
    span.addEventListener('click', () => li.classList.toggle('completed'));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}