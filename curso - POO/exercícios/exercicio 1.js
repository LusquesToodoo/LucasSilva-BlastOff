// Nome: Lucas Carlos da Silva
// Curso: Javascript -> Objetos
// Assunto: Objetos

// Objeto em javascript:
const desenvolvedor = {
  nome: "Lucas",
  idade: 22,
  empresa: "Toodoo",
  github: "Lusques",
};

// Como printar informações do objeto em js
console.log(
  `meu nome é ${desenvolvedor.nome} e o nick do meu github é ${desenvolvedor.github}.`,
);

console.log("\n");

//------------------------------

//Como acessar atributos da classe com as chaves em váriaveis:
const chaves = ["nome", "idade", "empresa", "github"];
const chave = "github";

// Um atributo
console.log(desenvolvedor[chave]);

// Todos os abributos - com for
for (let i = 0; i < chaves.length; i++) {
  console.log(desenvolvedor[chaves[i]]);
}
console.log("------------------------------");
// Todos os abributos - com forEach
chaves.forEach((info) => {
  console.log(desenvolvedor[info]);
});

console.log("\n");

//------------------------------

// Como alterar valor de atributo do objeto:

desenvolvedor.github = "LusquesToodoo";

console.log(desenvolvedor.github);

console.log("\n");

//------------------------------

// Como remover atributo de objeto:
// exemplo

// Objeto
const hotdog = {
  pao: "pao de hotdog",
  salsicha: 3,
  salada: true,
  catchup: true,
  mostarda: false,
  batataPalha: true,
  ervilha: true,
};

// Chaves para acessar objeto
const vetorHotDog = [
  "pao",
  "salsicha",
  "salada",
  "catchup",
  "mostarda",
  "batataPalha",
  "ervilha",
];

// Objeto antes de deletar atributo
vetorHotDog.forEach((ingrediente) => {
  console.log(`${ingrediente} : ${hotdog[ingrediente]}`);
});

// Comando que deleta atributo
delete hotdog.ervilha;

console.log("------------------------------");

vetorHotDog.forEach((ingrediente) =>
  console.log(`${ingrediente} : ${hotdog[ingrediente]}`),
);
// Atributo 'ervilha' retorna undefined

console.log("\n");
