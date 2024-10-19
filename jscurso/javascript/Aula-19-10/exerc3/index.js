console.clear()

const rl = require('readline-sync')

let valor_total = rl.questionFloat("Informe o Valor Total da Venda Realizada: R$")

novo_valor = valor_total - (valor_total*0.1)

console.log(`Valor da venda com 10% de desconto: R$${novo_valor.toFixed(2)}`)