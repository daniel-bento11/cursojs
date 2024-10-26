function verficar_primo(n1){
    cont=0;
    for (x= n1; x>0; x--){
        if (n1%x==0){
            cont++
        }
    }
    if (cont ==2){
        return true;
    }else{
        return false;
    }
}

const rl = require('readline-sync')

n1 = rl.questionInt("Informe o numero: ")

if (verficar_primo(n1)==true){
    console.log(`${n1} é primo`)
}else{
    console.log(`${n1} não é primo`)
}