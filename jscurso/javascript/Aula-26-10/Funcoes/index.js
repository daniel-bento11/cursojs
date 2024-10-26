// // Função Padrão ou Função Nominal
// function nomeDaFuncao() {
//     console.log("Essa é uma função");
// }

// nomeDaFuncao();

// function funcaoComParametro(nome, sobrenome) {
//     console.log("Texto armazendo: ", nome);
//     console.log("Texto sobrenome: ", sobrenome);
// }

// funcaoComParametro(5481, "Silva");

function somaDoisNumeros(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
}

const resultado = somaDoisNumeros(10, 15);
// console.log(resultado);
// console.log(somaDoisNumeros(17, 38));


// function somaDoisNumeros(numero1, numero2) {
//     const resultado = numero1 + numero2;
//     return resultado;
// }

// Função Atribuída - Expressão de Função
const somaValores = function(n1, n2) {
    return n1 + n2;
}
// console.log(somaValores(10, 8));

function chamaOutraFuncao(fn) {
    console.log("Irei invocar a próxima função:");
    fn();
}

const dizerOlaMundo = function() {
    console.log("Olá mundo");
}

// // Função com callback
// chamaOutraFuncao(dizerOlaMundo);

// // Função Anônima
// chamaOutraFuncao(function() {
//     console.log("Essa função nunca foi atribuída para uma variável");
// });

// Função Flecha - Arrow Function
// Arrow Function de uma linha, sem parâmetro
const arrowFn = () => console.log("Oi");
// Arrow Function de uma linha, com 1 parâmetro
const chamarNome = (nome) => console.log("Nome", nome);
const chamaNome  = nome => console.log("Nome", nome);

// Arrow Function de uma linha, com mais de parâmetro
const soma = (n1, n2) => n1 + n2;
/**
 * function soma(n1, n2) {
 *     return n1 + n2;
 * }
 */

// Arrow Function de múltiplas linhas
const funcaoMultipla = () => {
    console.log(10);
    return 1;
}

arrowFn();
chamarNome("João");