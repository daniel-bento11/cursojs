function quadrado(numero){
    return numero**2;
}

function cubo(numero){
    return numero**3
}

function exibir_lista(){
    console.clear()
    for(let i=1;i<=10;i++){
        if (i%2==0){
            console.log(`- ${cubo(i)}`)
        }else{
            console.log(`- ${quadrado(i)}`)
        }
    }
}

exibir_lista()