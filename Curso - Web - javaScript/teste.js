const input = '123.321.123-35'

console.log(input.replace(/[^0-9]/g,''))
//------------------------------------------

// const cpf = '364.231.487-24'
// // const ExpReg = /(\d{3})(\W)(\d{3})(\W)(\d{3})/g
// const ExpReg = /(\d{3})(\W)(\d{3})(\W)(\d{3})(\W)(\d{2})/
// // const obj = ExpReg.exec(cpf)
// const obj = ExpReg.match(cpf)
// obj.forEach((a)=>{
//   console.log(a)
// })

//------------------------------------------
function apenasNumeros(string)
{
var numsStr = string.replace(/[^0-9]/g,'');
return parseInt(numsStr);
}


console.log(apenasNumeros('Aqui está um exemplo de string que só pegará os valores ! 10/10/1010'))