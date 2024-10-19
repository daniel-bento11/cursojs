console.clear()

const rl = require('readline-sync')

let valor_total = rl.questionFloat("Informe o Valor Total da Venda Realizada: R$")
let desconto = 0
if (valor_total<=5000){
    desconto = 0.03;
}else if (valor_total<=10000){
    desconto = 0.05;
}else if (valor_total<=15000){
    desconto = 0.07;
}else{
    desconto = 0.09;
}

let novo_valor = valor_total - (valor_total*desconto)

console.log(`Valor da venda com ${(desconto*100).toFixed(0)}% de desconto: R$${novo_valor.toFixed(2)}`)