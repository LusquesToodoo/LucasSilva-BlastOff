Algoritmo "matriz"
// Disciplina   : Lógica de programação
// Descrição   : matrizes -Definção, declaração e atribuição
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var

   m:vetor[0..1, 0..1] de inteiro
   linha, coluna : inteiro

Inicio
   para linha de 0 ate 1 faça
      para coluna de 0 ate 1 faca
         escreval("Entre com um número: ")
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