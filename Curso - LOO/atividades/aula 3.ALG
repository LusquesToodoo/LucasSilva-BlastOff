Algoritmo "média"
// Disciplina   : Lógica de programação
// Descrição   : Portugês estruturado
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var
res: caractere
n1, n2, n3, n4 : real
media: real


Inicio
leia (n1, n2, n3, n4)
media <- ((n1 + n2 + n3 + n4 ) / 4)
se(media >= 7) então
         res <- "Aprovado"
senão
     res <- "Reprovado"
fimse
escreva("Resultado: ", res)


Fimalgoritmo