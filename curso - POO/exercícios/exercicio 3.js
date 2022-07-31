// Nome: Lucas Carlos da Silva
// Curso: Javascript -> Objetos
// Assunto: Listas de dependetes

// Verificar a melhor forma de adicionar
// mais de uma propiedade igual quando
// esse atributo é um objeto

// ex: o cliente tem dois ou mais dependentes,
// como informar isso no objeto cliente

// R: criar um array de objetos

const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124"],
  dependentes: [
    {
      nome: "Sara Silva",
      parentesco: "filha",
      dataNasc: "20/03/2011",
    },
  ],
};

console.log(cliente.dependentes);

// Como adicionar um novo dependente pelo script:
cliente.dependentes.push({
  nome: "Samia Maria",
  parentesco: "filha",
  dataNasc: "04/01/214",
});
cliente.dependentes.push({
  nome: "Samia Maria5",
  parentesco: "filha",
  dataNasc: "04/01/2014",
});

console.log(cliente.dependentes);
debugger;
const filhaMaisNova = cliente.dependentes.filter((dependente) => {
  return dependente.dataNasc === "04/01/2014" ? dependente.dataNasc : "";
});

console.log(filhaMaisNova[0].nome);

//------------------------------

// Como adicionar funções nos objetos

const cliente0 = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124"],
  dependentes: [
    {
      nome: "Sara Silva",
      parentesco: "filha",
      dataNasc: "20/03/2011",
    },
    {
      nome: "Samia Maria5",
      parentesco: "filha",
      dataNasc: "04/01/2014",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente0.saldo);
cliente0.depositar(30);
console.log(cliente0.saldo);
