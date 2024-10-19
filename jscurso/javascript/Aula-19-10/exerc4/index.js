console.clear()

const rl = require("readline-sync")

let idade = rl.questionInt("Informe a sua idade: ")

if (idade<16){
    console.log("Não pode tirar habilitação de motorista!")
}else if(16<=idade && idade<=20){
    console.log("Pode tirar Habilitação de Motorista, mas não pode beber!")
}else{
    console.log("Pode tirar Habilitação de Motorista, e beber!")
}