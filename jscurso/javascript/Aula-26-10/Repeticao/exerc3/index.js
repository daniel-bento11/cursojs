const rl = require('readline-sync')

do{
    senha = rl.question("Informe a senha: ", {hideEchoBack: true})
    if (senha != 'senha123'){
        console.log("Senha Incorreta!")
    }else{
        console.log("Seja Bem-Vindo!")
    }
}while(senha !='senha123')