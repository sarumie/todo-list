const todoList = ["Edit video", "Fix bug application", "Menyapu halaman"];
const inputTodo = document.getElementsByName("todo");
const todoBody = document.getElementById("todoBody");
const inputSearch = document.getElementById("search");
const toast = document.getElementById('toast');
const content = document.getElementById('toast_content');

// Toast notification
function displayToast(type, desc) {

  if (!toast.classList.contains('invisible')) return;
  toast.classList.remove('invisible');

  toast.classList.forEach((value) => {
    if (value.includes('bg-')) toast.classList.remove(value);
  });

  switch (type) {
    case 'warning':
      toast.classList.add('bg-red-400');
      content.innerText = desc.replace(/^/, 'WARNING : ');
      break;
    case 'invalid':
      toast.classList.add('bg-yellow-400');
      content.innerText = desc.replace(/^/, 'INVALID : ');
      break;
    default:
      toast.classList.add('bg-red-400');
      content.innerText = desc.replace(/^/, 'WARNING : ');
  }


  setTimeout(() => {
    toast.classList.add('invisible');
  }, 2000);
}

// Clearing TO-DO
function clearTodo() {
  while (todoBody.firstChild) {
    todoBody.removeChild(todoBody.firstChild);
  }
}

// Deleting TO-DO from index
function removeTodo(index, count = 1) {
  todoList.splice(index, count);
  displayTodo();
}

// Adding TO-DO
function addTodo(index, todo) {
  if (!index && !todo) return alert("Invalid!")

  const parentElement = document.createElement("div");
  const container = document.createElement("div");
  const buttonTrash = document.createElement("i");
  const desc = document.createElement("p");

  parentElement.setAttribute(
    "class",
    "bg-[#242731] text-[#DB886F] w-full h-fit p-4 mb-4"
  );
  container.setAttribute(
    "class",
    "w-full flex flex-row justify-between content-center break-words"
  );
  buttonTrash.setAttribute(
    "class",
    "text-[#C84C6B] hover:text-[#b3445f] duration-300 cursor-pointer my-auto fa-solid fa-trash-can"
  );

  desc.textContent = todo

  buttonTrash.onclick = () => {
    removeTodo(index);
  };

  container.appendChild(desc);
  container.appendChild(buttonTrash);
  parentElement.appendChild(container);
  todoBody.appendChild(parentElement);
}

// Displaying TO-DO
function displayTodo() {
  clearTodo();
  const searchText = document.getElementById("search").value.toLowerCase();

  todoList.forEach((element, index) => {
    if (element.toLowerCase().includes(searchText)) addTodo(index, element);
  });
}

// Adding TO-DO when form submitted
document.forms["todoForm"].onsubmit = (event) => {
  event.preventDefault(); // Mencegah redirect
  const todo = document.forms["todoForm"]["todo"].value;

  if (todo == "") return displayToast('invalid', "Input should'nt be empty!");

  todoList.push(todo);

  document.forms["todoForm"].reset();

  displayTodo();
};

// Search TO-DO on type
inputSearch.onkeyup = displayTodo;

displayTodo();