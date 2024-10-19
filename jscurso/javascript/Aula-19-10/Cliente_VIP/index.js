let valor = 100;
const tipoUsuario = "Normal";

// VIP + 15
//Especial +10
//Atenção + 5
//Normal +0

if (tipoUsuario == "VIP") {
    valor = valor + 15;
}else if(tipoUsuario == "Especial"){
    valor = valor + 10;
}else if (tipoUsuario == "Atenção"){
    valor = valor +5;
}

console.log("Valor final", valor);