function validaValor(descricao, MinValor) {
  let valor;
  do {
    valor = parseFloat(prompt(descricao));
  } while (valor >= MinValor);
  return valor;
}

function infoMulta() {
  const maxPeso = 50;
  const multa = 4;
  const pesoPeixe = validaValor(40);
  const excessoPeixe = pesoPeixe - maxPeso;

  console.log(excessoPeixe);
  if (excessoPeixe < 1) {
    console.log(
      `A multa só é aplicada para pesos maiores que ${maxPeso}kg, e você pescou ${pesoPeixe}.\nNão há multas há multa a ser paga.`,
    );
  }
}

infoMulta();
