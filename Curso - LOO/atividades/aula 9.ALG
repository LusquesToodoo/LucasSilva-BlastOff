Algoritmo "estrutura de controle de repeti��o"
// Disciplina   : L�gica de programa��o
// Descri��o   : Estrutura de repeti��o (repita... at�)
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var
valor, i : inteiro


Inicio
// Independente da condi��o, o bloco ser� repitido ao menos
// uma vez. Repete o bloco equanto a condi��o for FALSA.
repita
escreval("Informe 0 para sair")
leia(valor)
se valor <> 0 entao
escreval("Voc� n�o saiu do looping!")
fimse
escreval("")
at� valor = 0
escreval("Voc� saiu do looping!")


Fimalgoritmo