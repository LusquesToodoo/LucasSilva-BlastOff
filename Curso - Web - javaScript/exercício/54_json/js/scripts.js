const obj = [
  {
    nome: "Lucas",
    idade: 23,
    bonitao: true,
    detalhes_profissao: {
      profissao: "Desenvolvedor",
      area: "Front-ed",
      empresa: "Toodoo",
    },
    hobbies: ["Programar", "Malhar", "Skate"],
  },
  {
    nome: "Alecsander",
    idade: 0,
    bonitao: null,
    detalhes_profissao: {
      profissao: "guarda civil",
      area: "segurança",
      empresa: "autonomo",
    },
    hobbies: ["Estudar", "Malhar", "Skate"],
  },
];
// console.log(obj)

//JSON
//Como converter objeto para JSON
const jsonData = JSON.stringify(obj)

console.log(jsonData)

// OBJ
//Como converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
