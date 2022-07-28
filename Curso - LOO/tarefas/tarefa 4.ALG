Algoritmo "tarefa 4 - saldo no banco"
// Disciplina   : [Linguagem e Lógica de Programação]
// Descrição   : Fazer uma página que leia o saldo inicial de cliente
//do banco e leia também um cheque que entrou, ANALISE se o cheque poderá
//ser descontado ou não, já que este cliente não possui limite. Se o cheque
//não for descontado, mostre essa informação, caso contrário, desconte o
//cheque e informe o saldo ATUAL na tela.

// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 28/07/2022
Var
   saldoInicial, saldoFinal, valorCheque : real
   saldo, cheque : logico

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

procedimento informacaoConta()
inicio
   limpatela()
   se saldo entao
      escreval("Saldo da conta: R$", saldoInicial)
   senao
      escreval("Saldo Inicial: R$", saldoInicial)
      escreval("Saldo Atual: R$", saldoFinal)
   fimse

   se cheque entao
      escreval("Valor debitado da conta: R$", valorCheque)
   fimse
   escreval("=-----=")
fimprocedimento

Inicio
   saldo <- verdadeiro
   cheque <- falso

   escreval("Informe o saldo atual da conta: ")
   saldoinicial <- validaValor(0)
   informacaoConta()
   escreval("Informe o valor do cheque que será descontado: ")
   cheque <- verdadeiro
   valorCheque <- validaValor(0)
   informacaoConta()

   saldoFinal <- saldoInicial - valorCheque
   se saldoFinal < 0 entao
      escreval("Infelizmente, a conta referida não tem saldo ")
      escreval("suficiente para descontar o cheque.")
   senao
      saldo <- falso
      informacaoConta()
      escreval("Cheque descontado com sucesso!")
   fimse



Fimalgoritmo