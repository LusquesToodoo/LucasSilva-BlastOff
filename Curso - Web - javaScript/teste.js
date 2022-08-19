const toodoo = {
  "id_empresa": "Toodoo",
  "cidade": [
    "Santa Rita do Sapucaí-MG",
    "São Paulo-SP"
  ],
  "telefone": 12345678,
  "funcionarios": [
    {
      "id_funcionario": 1,
      "nome": "Flavio",
      "dependente": {
        "id_dependente": 1,
        "nome": "Vânia"
      }
    },
    {
      "id_funcionario": 2,
      "nome": "João",
      "dependente":{
        "id_dependente": 1,
        "nome": "Joaquim"
      }
    }
  ]
};

toodoo["endereco"] = [];
toodoo["endereco"].push({"São Paulo": "Rua Guaipa, 51 CJ 208 e 209,  Office Vila Rossi, Vila Leopoldina, SP"})
toodoo["endereco"].push({"Santa Rita":"Rua Hum, 72, Familia Andrade, Santa Rita do Sapucaí, MG"})

console.log('Objeto final');
console.log(toodoo);