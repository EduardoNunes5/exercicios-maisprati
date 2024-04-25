const prompt = require("prompt-sync")();

/* 
/ Exercício 1
/1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
/ valor correspondente em graus Fahrenheit.
*/

const celsius = parseFloat(prompt('Digite a temperatura em celsius: '));
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// --------------------------------------------------------------------------------------------------

/*
/ Exercício 2
/2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
/ votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
/ em relação ao total de eleitores
*/

const eleitores = parseInt(prompt("Digite o número de eleitores: "));
const votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
const votosValidos = parseInt(prompt("Digite o número de votos Válidos: "));

const percentualVotosBrancos = (parseFloat(votosBrancos) / eleitores) * 100.0;
const percentualVotosNulos = (parseFloat(votosNulos) / eleitores) * 100.0;
const percentualVotosValidos = (parseFloat(votosValidos) / eleitores) * 100.0;

console.log(`${percentualVotosBrancos} (percentual de votos em branco)`);
console.log(`${percentualVotosNulos} (percentual de votos nulos)`);
console.log(`${percentualVotosValidos} (percentual de votos válidos)`);


/*
/ Exercício 3
/ 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
const segundoNumero = parseInt(prompt("Digite o segundo número: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));
let quartoNumero = parseInt(prompt("Digite o quarto número: "));

const primeiraOperacao = primeiroNumero + 25;
const segundaOperacao = segundoNumero * 3;

terceiroNumero = terceiroNumero * 0.12;
quartoNumero += primeiroNumero + segundoNumero + terceiroNumero;

console.log(`${primeiraOperacao} - após somar 25 ao primeiro número`);
console.log(`${segundaOperacao} - após somar triplicar o segundo inteiro`);
console.log(`${terceiroNumero} - após modificar o terceiro inteiro para 12% do valor original`);
console.log(`${quartoNumero} - a soma dos valores originais`);

/* 
/Exercício 4 e 5
/ 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
/ calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
/ aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
/ aprovação)
/ 5.  Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
/ média calculada seja menor que 6,0
*/

const primeiraAvaliacao = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const segundaAvaliacao = parseFloat(prompt("Digite a nota da segunda avaliação: "));
const mediaAvaliacoes = (primeiraAvaliacao + segundaAvaliacao) / 2;
console.log("A média semestral é:", mediaAvaliacoes);
if(mediaAvaliacoes >= 6.0){
    console.log("PARABÉNS! Você foi aprovado");
}
else{
    console.log("Você foi REPROVADO! Estude mais");
}

/*
/ Exercício 6
/ 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
/ formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
/ Isósceles, escaleno ou eqüilátero.
/ Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
/ Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
/ Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
/ Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C
/
*/

const lado1 = parseInt(prompt("Digite o primeiro lado: "));
const lado2 = parseInt(prompt("Digite o segundo lado: "));
const lado3 = parseInt(prompt("Digite o terceiro lado: "));

if (lado1 < (lado2 + lado3) 
  && lado2 < (lado1 + lado3) 
  && lado3 < (lado2 + lado1)) {
  
  if(lado1 == lado2 && lado2 == lado3) {
    console.log("Forma um triângulo equilátero!");
  }
  else if (lado1 != lado2 && lado2 != lado3) {
    console.log("Forma um triângulo escaleno!");
  }
  else {
    console.log("Forma um triângulo isósceles!");
  }
}
else {
    console.log("Não forma um triângulo");
}


/*
/ Exercício 7
/ 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
/ forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
/ compradas, calcule e escreva o valor total da compra.
*/

const numeroMacas = parseInt(prompt("Digite o número de maçãs compradas: "));
let precoFinal = 0.0;

const duzia = 12;
const precoAbaixoDuzia = 0.30;
const precoAcimaDuzia = 0.25;
if(numeroMacas < duzia){
    precoFinal = numeroMacas * precoAbaixoDuzia;
}
else{
    precoFinal = numeroMacas * precoAcimaDuzia;
}

console.log(`O valor total da compra é: ${precoFinal}`);

/*
/ Exercício 8
/ 8. . Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
/ e escreve-los em ordem crescente
*/

const valor1 = parseInt(prompt("Digite o primeiro valor: "))
const valor2 = parseInt(prompt("Digite o segundo valor: "))

if(valor1 < valor2){
  console.log(`${valor1}, ${valor2}`)
}
else {
  console.log(`${valor2}, ${valor1}`)
}

/*
/ Exercício 9
/ 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
*/

const codigoOrigem = parseInt(prompt("Digite o código de origem do produto: "));
if(codigoOrigem === 1){
    console.log("Sul");
}
else if(codigoOrigem === 2){
    console.log("Norte");
}
else if(codigoOrigem === 3){
    console.log("Leste");
}
else if(codigoOrigem === 4){
    console.log("Oeste");
}
else if(codigoOrigem === 5 || codigoOrigem === 6){
    console.log("Nordeste");
}
else if(codigoOrigem === 7 || codigoOrigem === 8 || codigoOrigem === 9){
    console.log("Sudeste");
}
else if(codigoOrigem <= 20){
    console.log("Centro-Oeste");
}
else if(codigoOrigem >= 25 && codigoOrigem <= 50){
    console.log("Nordeste");
}
else{
    console.log("Fora dos intervalos - Produto Importado")
}

/*
/ Exercício 10
/ 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
const numero = parseInt(prompt("Digite um número: "))
for (let i = 0; i < 10; i++){
  console.log(numero)
}

/*
/ Exercício 11
/ 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
/ cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
/ ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
/ NEGATIVO.
*/

let valorLido;
do{
  valorLido = parseInt(prompt("Digite um inteiro: "));

  // eu utilizei o isNaN porque o parseInt converte para um NaN caso a pessoa ponha um texto vazio
  if(isNaN(valorLido) || valorLido < 0) {
    break;
  }

  const parOuImpar = valorLido % 2 == 0 ? "PAR" : "ÍMPAR";

  console.log(`O valor lido é: ${parOuImpar}`);
}
while(valorLido != null && valorLido >= 0);

/*
/ Exercício 12
/ 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
/ divididos por 11, dão resto igual a 5.
*/

for(let i = 1000; i <= 1999; i++){
  if(i % 11 === 5) {
    console.log(i);
  }
}

/*
/ Exercício 13
/ 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
/ calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
*/

for(let numero = 0; numero < 5; numero++) {
  let N = parseInt(prompt("Digite o valor de N: "));
  for(let fator = 1; fator <= N; fator ++) {
    console.log(`${fator} x ${N} = ${fator * N}`)
  }
}


/*
/ Exercício 14
/ 14.  Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
/ a média aritmética desses números.
*/


let quantidade = 0;
let soma = 0.0;
let valorAtual = -1.0;
while(valorAtual !== 0.0) {
  valorAtual = parseFloat(prompt("Digite um valor: "));
  if(valorAtual === 0) break;

  soma += valorAtual;
  quantidade++;

}

console.log(`A média aritmética dos valores é: ${soma / quantidade}`)


/*
/ Exercício 15
/ 15.  Fazer um algoritmos para receber um número decimal e o peso de cada número até
/ que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
/ respectivos.
*/

let valorLidoAtual = -1.0
let somaPesos = 0.0
let valoresOperadosComPeso = 0.0
while(valorLidoAtual !== 0){
  valorLidoAtual = parseFloat(prompt("Digite o valor atual: "));
  if(valorLidoAtual === 0.0) break;
  let pesoAtual = parseFloat(prompt("Digite o peso do valor atual: "));
  
  valoresOperadosComPeso += valorLidoAtual * pesoAtual;
  somaPesos += pesoAtual;
}

console.log(`A média ponderada é: ${valoresOperadosComPeso / somaPesos}`)

/*
/ Exercício 16
/ Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
/ Obs.: Número primo é aquele divisível somente por 1 e ele mesmo
*/

let contador = 101
let primos = 0;
while(primos < 50) {
    
    
    let divisores = 2;
    let ehPrimo = true;
    let metade = parseInt(contador / 2)
    while(divisores <= metade){
        if(contador % divisores === 0){
            ehPrimo = false;
        }
        divisores++;
    }
    if(ehPrimo) {
        primos++;
        console.log(`O ${primos}º primo encontrado, é: ${contador}`)
    }
    contador++;
}