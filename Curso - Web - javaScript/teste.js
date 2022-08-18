const sentenca = [];
const nChar = [];
const resultado = [];

console.log('Informe a sua 1° frase:');
sentenca.push('123');

sentensa.push(prompt('informe a sua 1° frase:'))

console.log('Informe a sua 2° frase:');
sentenca.push('123');

sentenca.forEach((frase, i)=>{
  nChar.push(frase.length);
  console.log(`Tamanho de "${frase}": ${nChar[i]} caractéres`);
})

if (nChar[0] === nChar[1]) {
  resultado.push('As duas strings são de tamanhos iguais');
  if (sentenca[0] === sentenca[1]) {
    resultado.push('As duas strings possuêm o mesmo conteúdo.');
  } else {
    resultado.push('As duas strings possuêm conteúdos diferentes.');
  }
}
else{
  resultado.push('As duas strings são de tamanhos diferentes.');
  resultado.push('As duas strings possuêm conteúdos diferentes.');
}

resultado.forEach((resposta)=>{
  console.log(resposta)
})
/*
Frases
São iguais
Número de carácteres
*/