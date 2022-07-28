Algoritmo "tarefa 2 - L/Km"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Descri��o   : Realizarei uma viagem de v�rios dias em meu
// autom�vel, e gostaria de saber a quilometragem m�dia por litro
// de gasolina. Para isto, anotarei a quilometragem no veloc�metro
// ao sair de viagem, e depois ao chegar; tamb�m vou somar toda a
// gasolina que comprar para o carro. Fa�a uma p�gina que com estes
// dados mostre quantos km fiz, em m�dia, por litro de gasolina

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

   escreval("Informe a quilometragem inicial do seu ve�culo: ")
   unidade <- "Km"
   kmInicial <- validaValor(0)
   escreval("Informe a quilometragem do seu ve�culo ap�s a viagem: ")
   kmFinal <- validaValor(kmInicial)
   kmRodado <- kmFinal - kmInicial

   escreval("Informe o total de gasolina que foi consumida em litros: ")
   unidade <- "L"
   gasolinaTotal <- validaValor(1)

   kmPorLitro <- kmRodado / gasolinaTotal
   escreval(kmPorLitro, "km/L")



Fimalgoritmo