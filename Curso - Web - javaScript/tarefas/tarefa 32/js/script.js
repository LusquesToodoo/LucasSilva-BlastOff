const inputs = document.querySelectorAll("input");
const table = document.querySelector(".table");

function createTable() {
  const tbody = document.querySelector(".table tbody");
  table.removeChild(tbody);
  const fator1 = inputs[0].value;
  const fator2 = inputs[1].value;
  let row = `<tbody><tr><th colspan="2">Tabuada do ${fator2}</th></tr>`;
  for (let i = 1; i <= fator1; i++) {
    row += `<tr><td>${fator2} x ${i}</td><td>${i * fator2}</td></tr>`;
  }
  row += `</tbody>`
  table.insertAdjacentHTML('beforeend', row)
}

inputs.forEach((input) => {
  input.addEventListener("change", createTable);
});
