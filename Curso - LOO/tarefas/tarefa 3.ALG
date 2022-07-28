Algoritmo "tarefa 3 - financiamento"
// Disciplina   : [Linguagem e Lógica de Programação]
// Descrição   : Faça uma página que receba o valor do salário
//de uma pessoa e o valor de um financiamento pretendido. Caso o
//financiamento seja menor ou igual a 5 vezes o salário da pessoa,
//a página deverá escrever "Financiamento Concedido"; senão, escreverá
//"Financiamento Negado". Independente de conceder ou não o financiamento,
//a página escreverá depois a frase "Obrigado por nos consultar."


// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 28/07/2022
Var
//==========================================================================
   salario, valorFinanciado : real
   continuar : caracter
//==========================================================================

//==========================================================================
funcao validaValor(valorMinimo : real) : real
var valor : real
inicio
   leia(valor)
   enquanto valor <= valorMinimo faca
      escreval("Erro! informe um valor maior que ", valorMinimo, ".")
      leia(valor)
   fimenquanto
   limpatela()
   retorne valor
fimfuncao
//==========================================================================

//==========================================================================
funcao opcao() : caracter
var decisao : caracter
inicio
   escreval("Como deseja proceder?")
   escreval("0 - Sair")
   escreval("1 - Refedinir salário/valor do financiamento")
   leia (decisao)
   escolha decisao
   caso "0"
      retorne "0"
   caso "1"
      retorne "1"
   outrocaso
      limpatela()
      escreval("ERRO! Selecione uma das opções disponíveis")
      decisao <- opcao()
      retorne decisao
   fimescolha
fimfuncao
//==========================================================================

//==========================================================================
procedimento infoFinanciamento(informacao : real)
inicio
   escreval("Informe o seu salário: ")
   salario <- validaValor(0)
   escreval("Informe o valor a ser financiado")
   valorFinanciado <- validaValor(0)
fimprocedimento

procedimento validaFinanciamento ()
inicio

   se valorFinanciado <= salario * 5 entao
      escreval("Financiamento Concedido!")
   senao
      escreval("Financiamento Negado!")
   fimse
   escreval("Obrigado por nos consultar!")
   continuar <- opcao()
fimprocedimento
//==========================================================================

Inicio

   continuar <- "1"
   enquanto continuar = "1" faca
      limpatela()
      infoFinanciamento(0)
      validaFinanciamento()
   fimenquanto
   limpatela()
   escreval("Obrigado por nos consultar!")

Fimalgoritmo