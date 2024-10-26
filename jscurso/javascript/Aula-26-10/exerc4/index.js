let soma = 0
let numero
const rl = require('readline-sync')

while (soma<100){
    numero = rl.questionInt("Informe um valor: ");
    soma = soma+numero;
    console.log(`Soma: ${soma}`)
}

