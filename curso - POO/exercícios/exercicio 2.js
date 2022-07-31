// Nome: Lucas Carlos da Silva
// Curso: Javascript -> Objetos
// Assunto: Manipulando objetos

// Um objeto pode ter um array como propriedade
// no caso dele ter mais de uma resposta para um
// mesmo atributo.
// ex:

const cliente = {
  nome: "Cliente",
  idade: 36,
  cpf: "12345678912",
  email: "cliente@email.com",
  telefone: ["+55(11) 1234-5678", "+55(11) 8765-4321"],
};

cliente.telefone.forEach((fone) => {
  console.log(fone);
});

//------------------------------

// Como fazer um objeto com um objeto como propriedade

cliente.dependente = {
  nome: "Filho do Cliente",
  parentesco: "filho",  
  dataNascimento: "29/07/2022"
}

console.log(cliente.dependente)

// Como mudar valor de sub-objeto

cliente.dependente.nome = "Filho Caçula do Cliente"

console.log(cliente.dependente)