let teste = "katarina chaves";
let new_nome = "";
let vogais = 0, consoantes=0;

function nomeDaFuncao(){
    console.log("Essa é uma função!")
}

nomeDaFuncao()


function contar_letras(nome){
    nome.forEach(letra => {
        if (nome.indexOf(letra)==0){
        new_nome = new_nome + letra.toUpperCase()
        }
        else{
            if (['a','e','i','o','u'].includes(letra.toLowerCase())){
                vogais=vogais+1;
                new_nome=new_nome+letra.toLocaleLowerCase()
            }else if(letra ==" "){
                new_nome=new_nome+letra.toLocaleLowerCase()
                contar_letras(nome.slice(nome.indexOf(letra)+1));
                return
            }else{
                consoantes = consoantes+1
                new_nome=new_nome+letra.toLocaleLowerCase()
            }
        }
    });
    
}
let nome = teste.split("")
console.log(nome)
contar_letras(nome)

console.log(new_nome)
console.log(`Vogais: ${vogais}
Consoantes: ${consoantes}`)