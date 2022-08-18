let genero = '';
let resultado = null;
do {
  genero = prompt('Informe o seu gênero:\nDigite: "M" - Masculino\nDigite: "F" - Feminino.')
  genero = genero.toLocaleLowerCase()
} while ( genero != 'm' && genero != 'f');

do {
  altura = prompt('Informe a sua altura:')
  altura = parseFloat(altura)
} while ( altura <= 0 || typeof(altura) === 'string');


if (genero == 'm') {
  resultado = (72.7 * altura) - 58
  genero = 'masculino'
}
else{
  resultado = (62.1 * altura) - 44.7
  genero = 'feminino'
}

console.log(`O resultado do MMC para uma pessoa do gênero ${genero} com ${altura}m de altura equivale aproximadamente a: ${Math.round(resultado)}`)