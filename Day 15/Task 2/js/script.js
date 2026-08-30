const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="actions">
      <button class="icon-btn edit-btn" title="Edit">✏️</button>
      <button class="icon-btn delete-btn" title="Delete">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
taskList.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('.task-item');

  if (target.classList.contains('delete-btn')) {
    li.remove();
  }

  if (target.classList.contains('edit-btn')) {
    const textSpan = li.querySelector('.task-text');
    const newText = prompt('Edit your task:', textSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
      textSpan.textContent = newText.trim();
    }
  }
});
