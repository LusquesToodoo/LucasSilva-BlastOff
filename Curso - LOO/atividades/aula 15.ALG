Algoritmo "Procedimentos & fun��es"
// Disciplina   : Lógica de programa��o
// Descri��o   : Procedimentos / Fun��es
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 27/07/2022
Var

   msg : caractere

   valor, return : inteiro

   //procedimento
procedimento hello(informacao : caractere)
inicio
   escreval("Hello ", informacao)
fimprocedimento

//fun��o
funcao cubo(x : inteiro) : inteiro
var resultado : inteiro
inicio
   resultado <- x * x * x
   retorne resultado
fimfuncao

Inicio
   escreval("informe um elemento para receber um hello")
   leia(msg)
   hello(msg)

   escreval("Digite um n�mero para calcular o seu cubo: ")
   leia(valor)
   return <- cubo(valor)
   escreval(return)

Fimalgoritmo