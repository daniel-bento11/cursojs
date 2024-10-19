//--------------------------------------------------
// Jeito Difícil
/**
* const readline = require('readline');
* const rl = readline.createInterface({
*    input: process.stdin,
*    output: process.stdout,
* });
*
* rl.question('Qual o seu nome? ', function(resposta){
*    console.log(resposta);
*    rl.close();
* })
*/
//--------------------------------------------------

const readlineSync = require('readline-sync');

var nome = readlineSync.question('Qual o seu nome? ');
console.log('Olá ' + nome + '!');

var idade = readlineSync.questionInt(`${nome} qual a sua idade? `)
console.log(`${nome} tem ${idade} anos!`)

var altura = readlineSync.questionFloat(`${nome} qual a sua altura em metros? `)
console.log(`${nome} tem ${altura} metros de altura!`)

var favComida = readlineSync.question(`${nome} qual sua comida Favorita? `, {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });

console.log('Oh, ' + nome + ' ama ' + favComida + '!');

