const todoList = ["Edit video", "Fix bug application"];
const inputTodo = document.getElementsByName("todo");
const todoBody = document.getElementById("todoBody");
const inputSearch = document.getElementById("search");

// Clear TO-DO
function clearTodoList() {
  while (todoBody.firstChild) {
    todoBody.removeChild(todoBody.firstChild);
  }
}

// Fungsi hapus todolist
function removeTodoList(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

// Menambah TO-DO
function addTodoList(index, todo) {
  const parentElement = document.createElement("div");
  const container = document.createElement("div");
  const buttonTrash = document.createElement("i");
  const desc = document.createElement("p");

  parentElement.setAttribute("class", "bg-[#242731] text-[#DB886F] w-full p-4 mb-4");
  container.setAttribute("class", "container flex flex-row justify-between content-center");
  buttonTrash.setAttribute("class", "text-[#C84C6B] hover:text-[#b3445f] duration-300 cursor-pointer my-auto fa-solid fa-trash-can");

  desc.textContent = todo;

  buttonTrash.onclick = function () {
    removeTodoList(index);
  }

  container.appendChild(desc);
  container.appendChild(buttonTrash);
  parentElement.appendChild(container);
  todoBody.appendChild(parentElement);
}

// Menampilkan TO-DO
function displayTodoList() {
  clearTodoList();

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
}

// Menambah TO-DO
document.forms['todoForm'].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms['todoForm']['todo'].value;

  if (todo === '') {
    return alert('Input kosong');
  }

  todoList.push(todo);

  document.forms['todoForm'].reset();

  displayTodoList();
}

// Cari todo
inputSearch.onkeyup = function () {
  displayTodoList();
}

displayTodoList();