const addTodo = document.querySelector("#addTodo");
const inputField = document.querySelector("#input");
const todoList = document.querySelector(".todoList");
const list = document.querySelector(".list");
let localTodoList = [];

function getTodoList() {
  return JSON.parse(localStorage.getItem("myTodoList"));
}
localTodoList = getTodoList() || [];

function addTodoDynamicElement(currEle) {
  const createDiv = document.createElement("div");
  createDiv.classList.add("list", "flex", "listMargin");
  const createLi = document.createElement("li");
  createLi.textContent = currEle;
  const createBtn = document.createElement("button");
  createBtn.classList.add("btn", "deleteBtn");
  createBtn.textContent = "Delete";
  createDiv.append(createLi);
  createDiv.append(createBtn);
  todoList.append(createDiv);
}

function addingTodo(e) {
  e.preventDefault();
  const todoListValue = inputField.value.trim();

  localTodoList.push(todoListValue);
  localTodoList = [...new Set(localTodoList)];

  localStorage.setItem("myTodoList", JSON.stringify(localTodoList));
  const createDiv = document.createElement("div");
  createDiv.classList.add("list", "flex", "listMargin");
  const createLi = document.createElement("li");
  createLi.textContent = inputField.value;
  const createBtn = document.createElement("button");
  createBtn.classList.add("btn", "deleteBtn");
  createBtn.textContent = "Delete";
  createDiv.append(createLi);
  createDiv.append(createBtn);
  if (inputField.value) {
    todoList.append(createDiv);
  }
  inputField.value = "";
}

function showTodoList() {
  localTodoList.forEach((currEle) => {
    addTodoDynamicElement(currEle);
  });
}

showTodoList();

function deleteBtn(e) {
  if (e.target.classList.value === "btn deleteBtn") {
    e.target.parentElement.remove();
  }
}

addTodo.addEventListener("click", addingTodo);
todoList.addEventListener("click", deleteBtn);
