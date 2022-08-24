function validateValue(description) {
  let value = justNumbers(prompt(description));
  while (value.length != 11) {
    value = prompt;
    value = justNumbers(prompt(`CPF INVÁLIDO!\N${description}`));
  }
  validateCPF(value)
}

function justNumbers(string) {
  const regexKey = /[^0-9]/g;
  let numbers = string.replace(regexKey, "");
  return parseInt(numbers);
}

function validateCPF(digits, checker){
  let digitsVector = digits.split('')
  console.log(digitsVector)
}

const cpf = validateValue("Informe o seu CPF (xxx.xxx.xxx-xx): ");
console.log(typeof(cpf))
