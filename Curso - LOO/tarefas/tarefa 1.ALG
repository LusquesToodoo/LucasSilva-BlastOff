Algoritmo "tarefa 1 - embolso"
// Disciplina   : [Linguagem e Lógica de Programação]
// Descrição   : Uma Empresa de desenvolvimento de softwares paga
// a seu vendedor um fixo de R$ 500,00 por mês, mais um bônus de
//R$ 50,00 por sistema vendido. Faça um programa que leia quantos
//softwares o funcionário vendeu e determine o salário total do funcionário.
//Mostre o salário final do vendedor.

// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 27/07/2022

//===================================================================
Var
   salarioFixo, salarioExtra, salarioTotal : real
   quantProjetos : inteiro
   opcao : caracter
//===================================================================

//===================================================================
procedimento infoSalario()
inicio
   limpatela()
   escreval("Informe o valor do salário fixo: ")
   salarioFixo <- validaNegativo()
   escreval("Informe o valor da bonificação por cada sistema vendido: ")
   salarioExtra <- validaNegativo
fimprocedimento
//===================================================================

//===================================================================
procedimento informativo(nVendas : logico)
inicio
   limpatela()
   escreval("Salário fixo: ", salarioFixo)
   escreval("Bonificação por venda: ", salarioExtra)
   se nVendas entao
      escreval("Quantidade de sistemas vendidos: ", quantProjetos)
   fimse
   escreval("=======================================")
fimprocedimento
//===================================================================

//===================================================================
funcao calcSalario(numeroVendas: inteiro) : real
inicio
   retorne salarioFixo + salarioExtra * numeroVendas
fimfuncao
//===================================================================

//===================================================================
funcao validaNegativo() : real
var salario : real
inicio
      leia(salario)
      enquanto salario < 0 faca
         limpatela()
         escreval("ERRO! Informe um valor a partir de 0: ")
         leia(salario)
      fimenquanto
      retorne salario
fimfuncao
//===================================================================

//===================================================================
funcao validaNegativoVendas() : inteiro
var vendas : inteiro
inicio
      leia(vendas)
      enquanto vendas < 0 faca
         limpatela()
         escreval("ERRO! Informe um valor a partir de 0: ")
         leia(vendas)
      fimenquanto
      retorne vendas
fimfuncao
//===================================================================


Inicio

   infoSalario()

   enquanto opcao <> "0" faca

      informativo(falso)

      escreval("Informe quantos projetos foram vendidos durante o mês: ")
      quantProjetos <- validaNegativoVendas()

      informativo(verdadeiro)

      escreval("Total a receber: ", calcSalario(quantProjetos))

      escreval("")

      escreval("Como deseja prosseguir?")
      escreval("0: finalizar operações")
      escreval("1: redefinir salário e bônus p/ venda")
      escreval("outro: calcular novamente")
      leia(opcao)
      escreval("")
      escolha opcao
      caso "0"
         limpatela()
         escreval("Obrigado por usar nossa aplicação!")
         escreval("Desenvolvido por: Lucas Silva")
         escreval("BlastOff - Quarta-feira 27.07.2022")
      caso "1"
         infoSalario()
      fimescolha
   fimenquanto

Fimalgoritmo
