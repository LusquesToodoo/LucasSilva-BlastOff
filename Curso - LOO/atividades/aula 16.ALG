Algoritmo "recursividade"
// Disciplina   : Lógica de programação
// Descrição   :  Recursividade
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 27/07/2022
Var
   valor : inteiro

funcao fatorial(x: inteiro) : inteiro
inicio
   se x <= 1 entao
      retorne 1
   senao
      retorne x * fatorial(x-1)
   fimse
fimfuncao

Inicio
escreva("Informe um valor: ")
leia(valor)
escreval(valor, "! = ", fatorial(valor))

Fimalgoritmo