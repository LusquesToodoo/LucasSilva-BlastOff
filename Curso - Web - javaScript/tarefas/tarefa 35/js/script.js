class Task {
  create = () => {
    let row = `
    <tr class="task">
        <td class="info">
          <p>${this.info}</p>
        </td>
        <td class="hidden-concluded toodoo-button-concluded">
        </td>
        <td class="hidden-concluded toodoo-button-delete">
        </td>
        <td class="hidden-toodoo return-concluded">
          <p>Concluído</p>
          <figure class="return-task">
            <img src="img/return-yellow.svg" alt="retornar tarefa">
          </figure>
        </td>
      </tr>
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
