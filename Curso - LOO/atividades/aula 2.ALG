Algoritmo "m�dia"
// Disciplina   : L�gica de programa��o
// Descri��o   : Portug�s estruturado
// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 26/07/2022
Var
res: caractere
n1, n2, n3, n4 : real
media: real


Inicio
leia (n1, n2, n3, n4)
media <- ((n1 + n2 + n3 + n4 ) / 4)
se(media >= 7) ent�o
         res <- "Aprovado"
sen�o
     res <- "Reprovado"
fimse
escreva("Resultado: ", res)


Fimalgoritmo