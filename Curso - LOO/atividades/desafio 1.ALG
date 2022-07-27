Algoritmo "media com vetor"
// Disciplina   : Lógica de programação
// Descrição   : Desafio - atribuição e leitura de dados
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var
i : inteiro
nota, soma, media : real
array : vetor[0..3] de real


Inicio

para i de 0 até 3 faça
escreval("Informe a sua ", i + 1, "° nota: ")
leia(nota)
soma <- soma + nota
array[i] <- nota
fimpara
escreval("")

media <- soma/4

para i de 0 até 3 faça
escreval(i + 1, "° nota: ", array[i])
fimpara
escreval("")
escreval("Nota média: ", media, ".")

Fimalgoritmo