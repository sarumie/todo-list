const todoList = ["Edit video", "Fix bug application", "Menyapu halaman"];
const todoBody = document.getElementById("todoBody");
const TODO_ADD = document.forms["todo-add"];
const TODO_EDIT = document.forms["todo-edit"];
const inputTodo = document.getElementsByName("todo");
const inputSearch = document.getElementById("search");
const inputElements = document.querySelectorAll("input,textarea");
const toast = document.getElementById("toast");
const toastContent = document.getElementById("toast_content");
const counter = document.getElementById("counter");
const popup = document.getElementById("popup-edit");
const bgPopUp = document.getElementById("bg-popup");

/*
  FUNCTIONS
*/
// Clearing TO-DO
function clearTodo() {
  while (todoBody.firstChild) todoBody.removeChild(todoBody.firstChild);
}

// Deleting TO-DO from index
function removeTodo(index, count = 1) {
  todoList.splice(index, count);
  displayTodo();
}

// Adding TO-DO
function addTodo(index, todo) {
  if (!index && !todo) return displayToast(false, "Failed adding todo");

  const parentElement = document.createElement("div");
  const container = document.createElement("div");
  const buttonTrash = document.createElement("i");
  const desc = document.createElement("p");

  parentElement.setAttribute(
    "class",
    "bg-[#242731] text-[#DB886F] w-full h-fit p-4 mb-4 hover:cursor-pointer"
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

  buttonTrash.onclick = () => removeTodo(index);

  container.appendChild(desc);
  container.appendChild(buttonTrash);
  parentElement.appendChild(container);
  todoBody.appendChild(parentElement);

  parentElement.addEventListener("dblclick", displayPopup);
  document.title = `To-do List(${todoList.length})`
}

// Displaying TO-DO
function displayTodo() {
  clearTodo();
  const searchText = document.getElementById("search").value.toLowerCase();

  todoList.forEach((element, index) => {
    if (element.toLowerCase().includes(searchText)) addTodo(index, element);
  });
}

// Toast notification
function displayToast(isSuccess, desc) {
  if (typeof isSuccess !== "boolean") return displayToast(false, "First param is not a boolean");

  if (toast.classList.contains("bg-green-400")) toast.classList.remove("bg-green-400");
  if (toast.classList.contains("bg-red-400")) toast.classList.remove("bg-red-400");

  isSuccess ? toast.classList.add("bg-green-400") : toast.classList.add("bg-red-400");
  isSuccess ? toastContent.innerText = desc : toastContent.innerText = desc.replace(/^/, "INVALID : ");

  toast.style.visibility = "visible"

  setTimeout(() => toast.style.visibility = "hidden", 2000);
}

// Display edit pop-up
function displayPopup() {
  TODO_EDIT["title"].value = this.innerText;

  popup.style.visibility = "visible";
}
/*
  END LINE FUNCTIONS
*/

// Add attr spellcheck off every input
for (const element of inputElements) element.setAttribute("spellcheck", "false");

// Adding TO-DO when form submitted
TODO_ADD.onsubmit = function (event) {
  event.preventDefault();
  const value = this["todo"].value;

  if (value == "") return displayToast(false, "Input should'nt be empty!");

  todoList.push(value);

  TODO_ADD.reset();

  displayTodo();
  displayToast(true, "TO-DO added >w<")
};

// Update todo
TODO_EDIT.onsubmit = function (event) {
  event.preventDefault();
  // TODO : Update todo..
}

bgPopUp.onclick = () => popup.style.visibility = "hidden";

// Search TO-DO on type
inputSearch.onkeyup = displayTodo;

displayTodo();