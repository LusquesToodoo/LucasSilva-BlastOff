const clients = []; // array dos clientes da academia.
const selectedClients = []; // clientes dentro do senso de altura e peso da academia.
const selectedClientsTags = ["Maior-altura","Menor-altura","Maior-peso","Menor-peso",]; // características levantadas para o senso.
let averageHeight, averageWeigth; // média das alturas e pesos.
let collectHeight = 0; // acumulador das alturas.
let collectWeigth = 0; // acumulador dos pesos.

// classe que usada para instânciar os clientes.
class Client {
  constructor(id, height, weight) {
    this.id = id;
    this.height = height;
    this.weight = weight;
  }
  createRow = function (isSelected) {
    const units = ["", "", "m", "Kg"];
    let i = 0;
    let row = isSelected ? "" : "<tr>";
    for (const key in this) {
      row += typeof this[key] == "function"? "" : `\n<td>\n${this[key]}${units[i]}\n</td>\n`;
      i++;
    }
    row += "</tr>";
    return row;
  };
}

// classe usada para ordenar os clientes selecionados a partir das suas características (listadas no senso).
class selectedClient {
  constructor(tag, selected) {
    this[tag] = selected;
  }
  createRow = function (tag) {
    let row = "<tr>";
    for (const key in this) {
      if (typeof this[key] == "function") {
        continue;
      }
      row += `\n<td>\n${key}\n</td>`;
      row += this[tag].createRow(true);
      return row;
    }
  };
}

// função usada para validar um tipo numérico, com base em um valor mínimo e um valor máximo não obrigatório.
function validaValor(descricao, MinValor, maxValor) {
  let valor;
  do {
    valor = parseFloat(prompt(descricao));
  } while (valor < MinValor || isNaN(valor) || valor > maxValor);
  return valor;
}

// função usada para avaliar se o ID informado já existe no sistema.
function validaId(id) {
  let existente;
  clients.forEach((client) => {
    if (client.id === id) {
      alert("ERRO! Esse id já foi registrado! Tente novamente!");
      existente = true;
    }
  });
  return existente ? -1 : id;
}

// loop criado para recolher os dados dos clientes da academia e coloca-los no array de clientes (clients).
while (true) {
  let id, height, weight;
  do {
    id = parseInt(
      validaValor("Informe o seu ID (digite 0 para cancelar a operação): ", 0),
    );
    id = validaId(id);
  } while (id === -1);
  if (id === 0) {
    averageHeight = collectHeight / clients.length;
    averageWeigth = collectWeigth / clients.length;
    break;
  }

  height = parseInt(validaValor("Informe a sua altura em cm: "), 0);
  weight = parseInt(validaValor("Informe o seu peso em Kg: "), 0);
  height /= 100;
  collectHeight += height;
  collectWeigth += weight;

  clients.push(new Client(id, height, weight));
}

// método usado para percorrer o array de clientes e selecionar os que melhor se enquadram no senso.
selectedClientsTags.forEach((tag) => {
  let selected;
  switch (tag) {
    case "Maior-altura":
      selected = clients.reduce((prev, current) => {
        return prev.height > current.height ? prev : current;
      });
      break;
    case "Menor-altura":
      selected = clients.reduce((prev, current) => {
        return prev.height < current.height ? prev : current;
      });
      break;
    case "Maior-peso":
      selected = clients.reduce((prev, current) => {
        return prev.weight > current.weight ? prev : current;
      });
      break;
    case "Menor-peso":
      selected = clients.reduce((prev, current) => {
        return prev.weight < current.weight ? prev : current;
      });
      break;
  }
  selectedClients.push(new selectedClient(tag, selected));
});

// ==================================================

// array usado para mapear no html onde cada tabela se encontra.
const tableTags = [
  ".tableClient > tbody",
  ".tableSenso > tbody",
  ".tableMedia > tbody",
];

// função criada no intuito de mostrar na tela do usuário as informações da tarefa.
function writesTables() {
  tableTags.forEach((table) => {
    const path = document.querySelector(table);
    let row;
    switch (table) {
      case tableTags[0]:
        clients.forEach((client) => {
          row = client.createRow();
          path.insertAdjacentHTML("beforeend", row);
        });
        break;
      case tableTags[1]:
        selectedClients.forEach((client, i) => {
          row = client.createRow(selectedClientsTags[i]);
          path.insertAdjacentHTML("beforeend", row);
        });
        break;
      case tableTags[2]:
        row = `<tr><td>${averageHeight}m</td><td>${averageWeigth}kg</td></tr>`;
        path.insertAdjacentHTML("beforeend", row);
        break;
    }
  });
  document.querySelector('#all-content').style.display = 'block'
}

writesTables();