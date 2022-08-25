class Retangulo {
  getHeight = () => {
    return this.height;
  };
  getWidth = () => {
    return this.width;
  };
  setHeight = function (height) {
    this.height = height;
  };
  setWidth = function (width) {
    this.width = width;
  };
  calculateArea = () => {
    return this.height * this.width + 'm²';
  };
  calculatePerimeter = () => {
    return (this.height * 2 + this.width * 2) + 'm';
  };
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
function input(description){
  return prompt(description)
}

function validateValue(description, MinValue, maxValue) {
  let value = parseFloat(input(description));
  while (value < MinValue || isNaN(value) || value > maxValue) {
    value = input(`Informe um valor entre ${MinValue} e ${maxValue || 'qualquer valor'}.\n`)
  }
  return value;
}

const height = validateValue('Informe a altura do retângulo (m):')
const width = validateValue('Informe a largura do retângulo (m): ')
const retangulo = new Retangulo(height, width)

console.log(`Nome do objeto criado: retangulo`)
console.log(`Atriburos do objeto:`)
console.log(`retangulo.height - armazena o valor da altura do objeto`)
console.log(`retangulo.width - armazena o valor da largura do objeto`)
console.log(`Atriburos do objeto:`)
console.log(`Funções e parâmetros para testes: `)
console.log(`retangulo.setHeight(height) - metodo setter que atualiza altura definida. Parâmetro refere-se ao valor que irá substituir o atributo atual.`)
console.log(`retangulo.setWidth(width) - metodo setter que atualiza largura definida. Parâmetro refere-se ao valor que irá substituir o atributo atual.`)
console.log(`retangulo.getHeight() - metodo getter que retorna altura definida.`)
console.log(`retangulo.getWidth() - metodo getter que retorna largura definida.`)
console.log(`retangulo.calculatePerimeter - metodo que calcula área em metro². Usa os valores atuais dos atributos do objeto para fazer os cálculos.`)
console.log(`retangulo.calculateArea() - metodo que calcula perímetro do retângulo e retornar valor em metros. Usa os valores atuais dos atributos do objeto para fazer os cálculos.`)

