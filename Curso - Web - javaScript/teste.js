class BombaCombustivel {
  constructor(type, value, quantity) {
    this.tipoCombustivel = type;
    this.valorLitro = value;
    this.quantidadeCombustivel = quantity;
  }

  atualizaQuantidade(quantity) {
    this.quantidadeCombustivel -= quantity;
    return true;
  }

  displayBomba(checked, quantity, value){
    if (checked) {
      console.log(`Abastecimento concluído!\nO valor de ${quantity}L de gasolina ${this.tipoCombustivel} equivale a R$ ${value}.`);
    } else {
      console.log(`Infelizmente o abastecimento não pode ser concluído.\nQuantidade de gasolina disponível: ${this.quantidadeCombustivel}L\nQuantidade solicitada: ${quantity}L`);
    }
  }

  abastecerPorValor = (value)=> {
    const quantity = value * this.valorLitro;
    const checked = quantity <= this.quantidadeCombustivel ? this.atualizaQuantidade(quantity) : false;
    checked ? this.displayBomba(checked, quantity, value) : '';
  }

  abastecerPorLitro = (quantity)=> {
    const value = quantity / this.valorLitro;
    const checked = quantity <= this.quantidadeCombustivel ? this.atualizaQuantidade(quantity) : false;
    checked ? this.displayBomba(checked, quantity, value) : '';
  }

  alterarValor = (value)=> {
    this.valorLitro = value;
  }

  alterarCombustivel = (type) => {
    this.tipoCombustivel = type;
  }

  alterarQuantidadeCombustivel = (quantity)=> {
    this.quantidadeCombustivel = quantity;
  }
}

const bomba = new BombaCombustivel('Aditivada', 2, 100)

console.log(bomba.)
