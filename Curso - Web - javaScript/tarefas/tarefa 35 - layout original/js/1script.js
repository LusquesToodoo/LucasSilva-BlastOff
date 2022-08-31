class Task {
  create = () => {
    let row = `
    <li class="task complete">
      <p>
        ${this.info}
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
    tableTooDoo.insertAdjacentHTML("beforeend", row);
    this.updateButtons();
  };

  updateButtons = () => {
    const concludedButtons = document.querySelectorAll(
      ".toodoo-button-concluded",
    );
    const deleteButtons = document.querySelectorAll(".toodoo-button-delete");
    concludedButtons.forEach((button) => {
      button.addEventListener("click", concludedButton);
    });
    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteButton);
    });
  };

  constructor(info) {
    this.info = info;
  }
}

const tableTooDoo = document.querySelector(".toodoo tbody");
const tableConcluded = document.querySelector(".concluded tbody");
const createButton = document.querySelector(".create-button");
const input = document.querySelector("#info-task");

function concludedButton(event) {
  const row = event.target.parentNode;
  tableConcluded.appendChild(row);
  const returnButtons = document.querySelectorAll(".return-concluded");
  returnButtons.forEach((button) => {
    button.addEventListener("click", returnTooDoo);
  });
}

function deleteButton(event) {
  const row = event.target.parentNode;
  tableTooDoo.removeChild(row);
}

function returnTooDoo(event) {
  const row = takeRow(event.target.parentNode);
  tableTooDoo.appendChild(row);
}

function takeRow(father) {
  return father.nodeName.toLowerCase() != "tr"
    ? takeRow(father.parentNode)
    : father;
}

createButton.addEventListener("click", () => {
  if (!input.value) {
    alert("Informe um título para a tarefa!");
    return;
  }
  const task = new Task(input.value);
  task.create();
  input.value = "";
  input.focus();
});
