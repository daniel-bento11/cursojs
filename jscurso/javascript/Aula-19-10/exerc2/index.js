const rl = require('readline-sync');

n1 = rl.questionFloat('Informe a primeira nota: ');
n2 = rl.questionFloat('Informe a segunda nota: ');
n3 = rl.questionFloat('Informe a terceira nota: ');
n4 = rl.questionFloat('Informe a quarta nota: ');

let media = (n1+n2+n3+n4)/4;

console.log(`A média do aluno é: ${media}`)
if (media >=6){
    console.log("Aprovado!")
}
else{
    console.log("Reprovado!")
}