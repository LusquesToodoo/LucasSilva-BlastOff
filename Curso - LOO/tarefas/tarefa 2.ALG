Algoritmo "tarefa 2 - Km/L"
// Disciplina   : [Linguagem e Lógica de Programação]
// Descrição   : Realizarei uma viagem de vários dias em meu
// automóvel, e gostaria de saber a quilometragem média por litro
// de gasolina. Para isto, anotarei a quilometragem no velocimetro
// ao sair de viagem, e depois ao chegar; também vou somar toda a
// gasolina que comprar para o carro. Faça uma página que com estes
// dados mostre quantos km fiz, em média, por litro de gasolina

// Autor(a)    : Lucas Carlos da Silva
// Data atual  : 27/07/2022

//===================================================================

Var
   kmInicial, KmFinal, kmRodado : real
   gasolinaTotal  : real
   kmPorLitro : real
   unidade : caracter

funcao validaValor(valorMinimo : real) : real
var valor : real
inicio
   leia(valor)
   enquanto valor < valorMinimo faca
      escreval("Erro! informe um valor a partir de ", valorMinimo , unidade, ".")
      leia(valor)
   fimenquanto
   limpatela()
   retorne valor
fimfuncao

//===================================================================

Inicio

   unidade <- "Km"
   escreval("Informe a quilometragem inicial do seu veículo: ")
   kmInicial <- validaValor(0)
   escreval("Informe a quilometragem do seu veículo após a viagem: ")
   kmFinal <- validaValor(kmInicial)
   kmRodado <- kmFinal - kmInicial

   unidade <- "L"
   escreval("Informe o total de gasolina que foi consumida em litros: ")
   gasolinaTotal <- validaValor(1)

   kmPorLitro <- kmRodado / gasolinaTotal
   escreval("No total foram rodados em média ", kmPorLitro, "km/L")

Fimalgoritmo