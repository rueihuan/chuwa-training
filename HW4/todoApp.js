import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here

const input = document.createElement("input");
const btn = document.createElement("button");
const list = document.createElement("ul");

btn.textContent = "Add Todo";
btn.onclick = () => {
  const todo = { content: input.value, isCompleted: false };
  todoApi.addTodo(todo).then(() => {
    createItem(todo, list);
    input.value = "";
  });
};

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(list);
renderList(list);

function renderList(list) {
  todoApi.getAllTodos().then(({ todos }) => {
    todos.forEach((todo) => {
      createItem(todo, list);
    });
  });
}

function createItem(todo, list) {
  const li = document.createElement("li");
  li.className = todo.isCompleted ? "completed" : "";
  list.appendChild(li);

  const span = document.createElement("span");
  span.textContent = todo.content;
  li.appendChild(span);

  span.ondblclick = () => {
    const idx = getIndex(list, li);
    todoApi.modTodo(idx).then(() => {
      li.classList.toggle("completed")
    });
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete Todo";
  li.appendChild(delBtn);

  delBtn.onclick = () => {
    const idx = getIndex(list, li);
    todoApi.delTodo(idx).then(() => {
      list.removeChild(li);
    });
  };
}

function getIndex(list, li) {
  const children = list.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i] === li) return i;
  }

  return -1;
}

setInterval(() => {
  todoApi.getAllTodos().then(({ todos }) => {
    console.log(todos);
  });
}, 2500);
