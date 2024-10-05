function calcular_media(n1,n2,n3,n4){
    return (n1+n2+n3+n4)/4;
}


const n1 = 8, n2 = 7, n3 = 3, n4 = 5;

const media = calcular_media(n1,n2,n3,n4)

console.log(`Média do aluno: ${media}`)

if (media>=6){
    console.log("Aprovado!")
}else {
    console.log("Reprovado!")
}

