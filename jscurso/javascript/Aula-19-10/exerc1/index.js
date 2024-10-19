const readlineSync = require('readline-sync');

let numero = readlineSync.questionInt('Qual o numero da tabuada que deseja calcular? ');
let multiplicador = 1;

console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);

console.log("-".repeat(13))

for (let i = 1; i<=10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
}