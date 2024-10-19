//--------------------------------------------------
// Jeito Difícil
/* 
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

var favComida = readlineSync.question('Qual sua comida Favorita? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, ' + nome + ' ama ' + favComida + '!');
