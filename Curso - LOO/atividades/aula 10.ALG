Algoritmo "estrutura de controle de repetição"
// Disciplina   : Lógica de programação
// Descrição   : Estrutura de repetição (repita... até)
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var
valor, i : inteiro


Inicio
// Independente da condição, o bloco será repitido ao menos
// uma vez. Repete o bloco equanto a condição for FALSA.
repita
escreval("Informe 0 para sair")
leia(valor)
se valor <> 0 entao
escreval("Você não saiu do looping!")
fimse
escreval("")
até valor = 0
escreval("Você saiu do looping!")


Fimalgoritmo