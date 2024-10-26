function somar(n1, n2){
    return n1+n2;
}

function subtrair(n1, n2){
    return n1-n2;
}

function multiplicar(n1,n2){
    return n1*n2;
}

function dividir(n1,n2){
    return n1/n2;
}

function exibir_menu(){
    console.log(`Escolha o que deseja fazer: 
     1. Somar
     2. Subtrair
     3. Multiplicar
     4. Dividir
     5. Sair`);
}

const rl = require('readline-sync');
let resultado, operacao, n1,n2, opt;

console.clear();

do{
    exibir_menu();
    opt = rl.questionInt();
    switch (opt){
        case 1:
        case 2:
        case 3:
        case 4:
            n1 = rl.questionFloat("Informe o primeiro Operando: ");
            n2 = rl.questionFloat("Infrome o segundo Operando: ");
            break;
    };
    switch (opt){
        case 1:
            resultado = somar(n1,n2);
            operacao = "+";
            break;
        case 2:
            resultado = subtrair(n1,n2);
            operacao = "-";
            break;
        case 3:
            resultado = multiplicar(n1,n2);
            operacao = "*";
            break;
        case 4:
            if (n2 !=0){
                resultado = dividir(n1,n2);
            }else{
                resultado = "Impossível Dividir por zero!";
            }
            operacao = "/"
            break;
    };
    switch(opt){
        case 1:
        case 2:
        case 3:
        case 4:
            console.log(`${n1} ${operacao} ${n2} = ${resultado}`)
            break;
        case 5:
            console.log("Adeus!")
            break;
        default:
            console.log("Opção Inválida!")
            break;
    };
}while (opt != 5);