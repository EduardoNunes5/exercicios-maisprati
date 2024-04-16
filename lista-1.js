const prompt = require("prompt-sync")();

/* 
/ Exercício 1
/1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
/ valor correspondente em graus Fahrenheit.
*/

const celsius = parseFloat(prompt('Digite a temperatura em celsius: '))
const fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit) 

// --------------------------------------------------------------------------------------------------

/*
/ Exercício 2
/2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
/ votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
/ em relação ao total de eleitores
*/

const eleitores = parseInt(prompt("Digite o número de eleitores: "))
const votosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
const votosValidos = parseInt(prompt("Digite o número de votos Válidos: "))

const percentualVotosBrancos = (parseFloat(votosBrancos) / eleitores) * 100.0
const percentualVotosNulos = (parseFloat(votosNulos) / eleitores) * 100.0
const percentualVotosValidos = (parseFloat(votosValidos) / eleitores) * 100.0

console.log(`${percentualVotosBrancos} (percentual de votos em branco)`)
console.log(`${percentualVotosNulos} (percentual de votos nulos)`)
console.log(`${percentualVotosValidos} (percentual de votos válidos)`)


/*
/ Exercício 3
/ 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const primeiroNumero = parseInt(prompt("Digite o primeiro número: "))
const segundoNumero = parseInt(prompt("Digite o segundo número: "))
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "))
let quartoNumero = parseInt(prompt("Digite o quarto número: "))

const primeiraOperacao = primeiroNumero + 25
const segundaOperacao = segundoNumero * 3

terceiroNumero = terceiroNumero * 0.12
quartoNumero += primeiroNumero + segundoNumero + terceiroNumero

console.log(`${primeiraOperacao} - após somar 25 ao primeiro número`)
console.log(`${segundaOperacao} - após somar triplicar o segundo inteiro`)
console.log(`${terceiroNumero} - após modificar o terceiro inteiro para 12% do valor original`)
console.log(`${quartoNumero} - a soma dos valores originais`)

/* 
/Exercício 4 e 5
/ 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
/ calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
/ aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
/ aprovação)
/ 5.  Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
/ média calculada seja menor que 6,0
*/

const primeiraAvaliacao = parseFloat(prompt("Digite a nota da primeira avaliação: "))
const segundaAvaliacao = parseFloat(prompt("Digite a nota da segunda avaliação: "))
const mediaAvaliacoes = (primeiraAvaliacao + segundaAvaliacao) / 2
console.log("A média semestral é:", mediaAvaliacoes)
if(mediaAvaliacoes >= 6.0){
    console.log("PARABÉNS! Você foi aprovado")
}
else{
    console.log("Você foi REPROVADO! Estude mais")
}