var input = document.querySelector("form input");
var add = document.querySelector("form button");
var ul = document.querySelector(".todos");
var form = document.querySelector("form");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addToDo(todo));
}
function addToDo(todo) {
  const li = document.createElement("li");
  li.setAttribute("class", todo.completed ? "completed" : "");
  li.innerHTML = `<span>${todo.text}</span><i class="fas fa-trash"></i>`;
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    updateToDos();
  });
  li.querySelector("i").addEventListener("click", (e) => {
    e.target.parentElement.remove();
    updateToDos();
  });
  ul.appendChild(li);
  updateToDos();
}

// Update local Storage
function updateToDos() {
  const list = document.querySelectorAll("li");
  const todos = [];
  list.forEach((item) => {
    todos.push({
      text: item.querySelector("span").innerText,
      completed: item.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  text != "" ? addToDo({ text: text, completed: false }) : undefined;
  input.value = "";
});
