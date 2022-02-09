const todoList = [];

function displayTodoList() {
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const container = document.createElement("div");
    const buttonSubmit = document.createElement("button");
  }
}

document.forms['todoForm'].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms['todoForm']['todo'].value;
  todoList.push(todo);

  document.forms['todoForm'].reset();

  console.info(todoList);
}