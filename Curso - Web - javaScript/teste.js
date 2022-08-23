function validaValor(descricao, MinValor, maxValor) {
  let valor;
  do {
    valor = parseFloat(prompt(descricao));
  } while (valor < MinValor || isNaN(valor) || valor > maxValor);
  return valor;
}

function printTriangle(value) {
  let row = '';
  for (let i = 0; i <= value; i++) {
    row += ` ${i}`;
    console.log(row)
  }
}

printTriangle(
  parseInt(
    validaValor('Informe quantas linhas gostaria de imprimir no seu triângulo retângulo (min: 0; max: 50): ', 0, 50)
    )
  );