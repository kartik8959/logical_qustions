console.log(document, "input");
let taskInput = document.getElementById("todo-input");
let addTaskBtn = document.getElementById("add-task");
let saveTaskBtn = document.getElementById("edit-task");
let saveIndex = document.getElementById("save-index");
let listBox = document.getElementById("list");

let todoArray = [];

const addTask = (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo) {
    todoArray = JSON.parse(todo);
  } else {
    todoArray = [];
  }
  if (taskInput.value) {
    todoArray.unshift(taskInput.value);
    taskInput.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
  } else {
    alert("Please Enter Correct Task Input");
  }
  displayTodo();
};

const saveTask = (e) => {
  todoArray = JSON.parse(localStorage.getItem("todo"));
  let id = saveIndex.value;
  todoArray[id] = taskInput.value;
  localStorage.setItem("todo", JSON.stringify(todoArray));
  saveTaskBtn.style.display = "none";
  addTaskBtn.style.display = "inline-block";
  taskInput.value = "";
  displayTodo();
};

const edit = (id) => {
  saveIndex.value = id;
  let todo = JSON.parse(localStorage.getItem("todo"));
  taskInput.value = todo[id];
  addTaskBtn.style.display = "none";
  saveTaskBtn.style.display = "inline-block";
};

const deleteTodo = (id) => {
  todoArray = JSON.parse(localStorage.getItem("todo"));
  todoArray.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
};

const displayTodo = () => {
  let todo = localStorage.getItem("todo");
  let htmlCode = "";
  if (todo) {
    todoArray = JSON.parse(todo);
    todoArray.forEach((todo, idx) => {
      htmlCode += `
      <div class="todo-item"><p >${todo} </p>
        <div class="todo-btns">
            <button class="edit-todo todo-item-btn" onclick='edit(${idx})' data-index=${idx}>Edit</button>
            <button class="delete-todo todo-item-btn" onclick='deleteTodo(${idx})' data-index=${idx}>delete</button>
        </div>
        </div>`;
    });
  } else {
    todoArray = [];
  }
  listBox.innerHTML = htmlCode;
};

addTaskBtn.addEventListener("click", addTask);
saveTaskBtn.addEventListener("click", saveTask);

displayTodo();
