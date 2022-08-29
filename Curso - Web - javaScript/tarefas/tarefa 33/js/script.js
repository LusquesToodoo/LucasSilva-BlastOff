const input = document.querySelector("#fatorial");
const table = document.querySelector(".table");
const button = document.querySelector(".button");

function calculateFatorial(fator) {
  return fator == 0 ? 1 : fator * calculateFatorial(fator - 1);
}

function createTable() {
  const tbody = document.querySelector(".table tbody");
  table.removeChild(tbody);
  const fator = input.value;
  const row = 
  `<tbody>
    <tr>
      <th colspan="2">Fatorial de ${fator}</th>
    </tr>
    <tr>
      <td>Resultado</td> <td>${calculateFatorial(fator)}</td>
    </tr>
  </tbody>`;
  table.insertAdjacentHTML("beforeend", row);
}

button.addEventListener("click", createTable);
