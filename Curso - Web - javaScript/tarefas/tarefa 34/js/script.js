const inputs = document.querySelectorAll("input");
const button = document.querySelector(".button");
const table = document.querySelector(".table");

function validateNumber() {
  let stop;
  inputs.forEach((input, i) => {
    if (input.value == "") {
      alert(
        `Informe um numero válido no valor ${i === 0 ? "mínimo" : "máximo"}!`,
      );
      stop = true;
    }
  });
  return stop;
}

button.addEventListener("click", () => {
  const tbody = document.querySelector(".table > tbody");
  const valueMin = +inputs[0].value;
  const valueMax = +inputs[1].value;
  let row = `<tbody>
  <tr>
    <th colspan="2">Múltiplo de:</th>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
  </tr>`;

  if (validateNumber()) {
    return;
  } else if (valueMin > valueMax) {
    alert("O valor máximo deve ser maior que o valor mínimo!");
    return;
  }
  for (let i = valueMin; i <= valueMax; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      row += `<tr><td${i % 2 === 0 ? ('>' + i ): " empy > -"}</td><td${i % 3 === 0 ? ('>' + i ): " empy > -"}</td></tr>`;
    }
  }
  row += `</tbody>`;
  table.removeChild(tbody);
  table.insertAdjacentHTML("beforeend", row);
});
