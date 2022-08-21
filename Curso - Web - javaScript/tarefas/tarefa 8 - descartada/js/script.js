const tabelaClientes = document.querySelector('.infoClientes')
const tabelaMedias = document.querySelector('.infoSenso')
const idSenso = ['maior-peso', 'menor-peso', 'maior-altura', 'menor-altura']

let clientes = [];
const sensoClientes = {
  clienteAlto: undefined,
  clienteBaixo: undefined,
  clienteGordo: undefined,
  clienteMagro: undefined,
  mediaAltura: undefined,
  mediaPeso: undefined,
}
// let clienteAlto,
//   clienteBaixo,
//   clienteGordo,
//   clienteMagro,
//   mediaAltura,
//   mediaPeso;

function validaValor(descricao, MinValor, maxValor) {
  let valor;
  do {
    valor = parseFloat(prompt(descricao));
    maxValor ? maxValor : valor - 1;
  } while (valor < MinValor || isNaN(valor) || valor > maxValor);
  return valor;
}

function validaId(id) {
  let existente;
  clientes.forEach((cliente) => {
    if (cliente.id === id) {
      alert("ERRO! Esse id já foi registrado! Tende novamente!");
      existente = true;
    }
  });
  return existente ? -1 : id;
}

function validaSenso(clienteAtual) {
  sensoClientes.clienteAlto =
    sensoClientes.clienteAlto.altura > clienteAtual.altura ? clienteAlto : clienteAtual;
  sensoClientes.clienteBaixo =
    sensoClientes.clienteBaixo.altura < clienteAtual.altura ? clienteBaixo : clienteAtual;
  sensoClientes.clienteGordo =
    sensoClientes.clienteGordo.peso > clienteAtual.peso ? clienteGordo : clienteAtual;
  sensoClientes.clienteMagro =
    sensoClientes.clienteMagro.peso < clienteAtual.peso ? clienteMagro : clienteAtual;
}

function escreveInfoClientes(cliente) {
  const linhaTabela = `<tr><td>${cliente.id}</td><td>${cliente.altura/100}m</td><td>${cliente.peso}Kg</td></tr>`;
  tabelaClientes.insertAdjacentHTML('beforeend', linhaTabela)
}

const Cliente = class Cliente {
  constructor(id, altura, peso) {
    this.id = id;
    this.altura = altura;
    this.peso = peso;
  }
};

while (true) {
  let id, altura, peso;
  do {
    id = parseInt(
      validaValor("Informe o seu Id (digite 0 para cancelar a operação): ", 0),
    );
    id = validaId(id);
  } while (id === -1);
  if (id === 0) {
    break;
  }
  altura = parseInt(validaValor("Informe a sua altura em cm: "), 0);
  peso = parseInt(validaValor("Informe o seu peso em Kg: "), 0);

  clientes.push(new Cliente(id, altura, peso));
}

sensoClientes.clienteAlto = clientes[0];
sensoClientes.clienteBaixo = clientes[0];
sensoClientes.clienteGordo = clientes[0];
sensoClientes.clienteMagro = clientes[0];

clientes.forEach((cliente) => {
  validaSenso(cliente);
  escreveInfoClientes(cliente)
  sensoClientes.mediaAltura += cliente.altura;
  sensoClientes.mediaPeso += cliente.peso;
});

idSenso.forEach((id)=>{
  const linhaTabela()
  const tabelaSenso = document.querySelector(`#${id}`)
  tabelaSenso.insertAdjacentHTML('beforeend', )

})



sensoClientes.mediaAltura /= clientes.length
sensoClientes.mediaPeso /= clientes.length

