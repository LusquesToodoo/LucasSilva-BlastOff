class Task {
  createRow = function () {
    const row = `
    <li class="task">
    <p>
      ${this.title}
    </p>
    <div>
      <figure class="button-complete">
        <img src="img/complete-light.svg" alt="complete">
        <img src="img/complete-dark.svg" alt="complete">
      </figure>
      <figure class="button-delete">
        <img src="img/close-light.svg" alt="delete">
        <img src="img/close-dark.svg" alt="delete">
      </figure>
    </div>
  </li>
  `;

    taskContainer.insertAdjacentHTML("beforeend", row);
    const completeButtons = document.querySelectorAll(".button-complete");
    const deleteButtons = document.querySelectorAll(".button-delete");
    completeButtons.forEach((button) => {
      button.addEventListener("click", completeMarked);
    });
    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteTask);
    });
  };

  constructor(title) {
    this.title = title;
  }
}

function newTask() {
  if (!input.value) {
    alert("Informe um título para a tarefa!");
    return;
  }
  const task = new Task(input.value);
  task.createRow();
  input.value = "";
  input.focus();
}

function completeMarked(event) {
  const task = checkIsElement(event.target, "li");
  task.classList.toggle("complete");
  if (task.className.indexOf('complete') == -1) {
    taskContainer.appendChild(task);
  }else{
    taskContainerComplete.appendChild(task);
  }
}
function deleteTask(event) {
  const task = checkIsElement(event.target, "li");
  task.parentNode.removeChild(task);
}

function checkIsElement(element, tag) {
  return element.nodeName.toLowerCase() == tag
    ? element
    : checkIsElement(element.parentNode, tag);
}

const taskContainer = document.querySelector(".tasks-container:not(.complete)");
const taskContainerComplete = document.querySelector(
  ".tasks-container.complete",
);
const buttonNewTask = document.querySelector(".button-add-task");
const input = document.querySelector("#info-task");

buttonNewTask.addEventListener("click", newTask);
