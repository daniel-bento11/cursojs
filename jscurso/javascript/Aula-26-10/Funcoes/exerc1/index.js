const rl = require('readline-sync')

n1 = rl.questionInt("Informe o primeiro numero: ")
n2 = rl.questionInt("Informe o seguno numero: ")

const maiorNumero = (n1,n2) => {
    if (n1>n2){
        console.log(`${n1} é maior que ${n2}`)
    }else if (n2>n1){
        console.log(`${n2} é maior que ${n1}`)
    }else{
        console.log(`Os dois número são ${n1}`)
    }
}

maiorNumero(n1,n2)