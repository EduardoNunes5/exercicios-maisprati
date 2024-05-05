const prompt = require('prompt-sync')()
/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

function daysLost(amountPerDay, years) {
    const totalCigarretes = amountPerDay * 365 * years
    const lossByMinute = 10
    const totalMinutesLost = totalCigarretes * lossByMinute

    return Math.round(totalMinutesLost / (24 * 60))
}

amountPerDay = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "))
years = parseInt(prompt("Digite a quantidade de anos de fumante: "))
console.log("Você perdeu", daysLost(amountPerDay, years), "dias de vida")

/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h^-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

function calculateTicket(speed) {
    const maxSpeed = 80;
    const diff = speed - maxSpeed;
    if(diff <= 0) {
        return 0.0;
    }
    else {
        return Math.abs(diff) * 5;
    }
}

speed = parseFloat(prompt("Digite a velocidade do carro: "))
const ticket = calculateTicket(speed)
if(ticket > 0){
    console.log(`Você foi multado! Deverá pagar: R$ ${ticket.toFixed(2)}`);
}
else{
    console.log("Você não foi multado!");
}


/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

function tripCost(distance) {
    const priceUpTo200km = 0.5;
    const priceBeyond200km = 0.45

    if(distance <= 200)
        return distance * priceUpTo200km;
    else
        return distance * priceBeyond200km;

}

const distance = parseFloat(prompt("Digite a distância da viagem em km: "))
console.log("A viagem custará: R$", tripCost(distance));

/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

function isTriangle(...segmentos) {

    console.log(segmentos)
    if((segmentos[0] + segmentos[1]) > segmentos[2] &&
    (segmentos[2] + segmentos[1]) > segmentos[0] &&
    (segmentos[0] + segmentos[2]) > segmentos[1]) {
        return "É possível formar um triângulo"
    }
    else{
        return "Não é possível formar um triângulo"
    }

}

const segment1 = parseFloat(prompt("Digite o tamanho do primeiro segmento: "))
const segment2 = parseFloat(prompt("Digite o tamanho do segundo segmento: "))
const segment3 = parseFloat(prompt("Digite o tamanho do terceiro segmento: "))
console.log(isTriangle(segment1, segment2, segment3))

/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

function joKenPo(player) {
    const jokenpo = {
        'P': 'Papel',
        'S': 'Tesoura',
        'R': 'Pedra'
    }
    const paper = 'P';
    const scissors = 'S';
    const rock = 'R';

    if(jokenpo[player] === undefined){
        return "Jogada inválida!"
    }

    const npcMove = Math.floor(Math.random() * 3);
    const npcMoveChar = Object.keys(jokenpo)[npcMove]

    console.log("Você jogou:", jokenpo[player])
    console.log("A máquina jogou:", jokenpo[npcMoveChar])
    if((player === paper && npcMoveChar === scissors) ||
        (player === scissors && npcMoveChar === rock) ||
        (player === rock && npcMoveChar === paper)){
        return "Você perdeu!"
    }
    else if ((player === paper && npcMoveChar === rock) ||
    (player === scissors && npcMoveChar === paper) ||
    (player === rock && npcMoveChar === scissors)){
        return "Você venceu"
    }

    return "Empatou!";

}

console.log("**** Bem-vindo ao jogo de pedra, papel e tesoura! (Jo-ken-po) ****\n");
const move = prompt("Digite R para Pedra, P para Papel ou S para Tesoura: ")
console.log(joKenPo(move));