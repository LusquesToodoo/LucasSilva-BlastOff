Algoritmo "matriz"
// Disciplina   : L�gica de programa��o
// Descri��o   : matrizes -Defin��o, declara��o e atribui��o
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var

   m:vetor[0..1, 0..1] de inteiro
   linha, coluna : inteiro

Inicio
   para linha de 0 ate 1 fa�a
      para coluna de 0 ate 1 faca
         escreval("Entre com um n�mero: ")
         leia( M[linha, coluna] )
      fimpara
   fimpara

   para linha de 0 ate 1 faca
      para coluna de 0 ate 1 faca
         escreva("[a", linha, coluna, "] = ", m[linha, coluna], " ")
      fimpara
      escreval("")
   fimpara
Fimalgoritmo