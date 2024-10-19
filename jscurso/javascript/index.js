/** 
*    1 - Nunca iniciar com caractere especial exceto o _(underline/underscore)
*    2- Nunca iniciar com números
*    3 - Nunca separar palavras compostas com espaço
*    3a - Ao separar palavras, utilizar um dos 3 modelos abaixo
*        - PascalCase: Toda palavra é iniciada por LetraMaiúscula
*        - camelCase: A partir da segunda palavra, iniciar em letraMaiúscula
*        - snake_case: Separar as palavras por _ *underline/underscore)    
*/

// console.log("Hello World!"); Exibir mensagem no console

/** 
*    var minhaVariavel = "alugma coisa";    - variável
*    const variavel = 3.14;     - constante
*    let minhaNovaVariavel = "mudar";    - variável que muda
*/
let texto1 = "este é um texto";
let texto2 = "este é outro texto";
let numeral = 10; //-10
const numero_decimal = 3.14; //-3.14
let lógico = true; //false
let nulo = null //vazio
let indefinido = undefined //não definido


const nome = "Daniel";
const sobrenome = "Bento";
const idade = 21;
const nomeCompleto = nome + " " + sobrenome;
const mensagem = "Olá, meu nome é " + nomeCompleto + "\ne tenho " + idade + " anos.";
const mensagem_interpolada = `Olá, meu nome é ${nomeCompleto}
e tenho ${idade} anos.`;

console.log("Olá meu nome é %s e tenho %d anos.", nome, idade);
/**
 * %s - String
 * %d - Digito
 * %o - Objetct
 */

console.log(mensagem_interpolada);
console.log("");
console.log(mensagem);

/**
 * Operações Matemáticas
 *      Soma ------------------- +
 *      Subtração -------------- -
 *      Multiplicação ---------- *
 *      Divisão ---------------- /
 *      Resto ------------------ %
 *      Exponenciação ---------- **
 *      Incrementar por 1 ------ ++
 *      Decrementar por 1 ------ --
 */

let x = 10

if (x%2 == 0){
    console.log("Par");
}
else{
    console.log("Ímpar");
}

let numero = 8;
let multiplicador = 1;

console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);
console.log(`${numero} X ${multiplicador} = ${numero * multiplicador++ }`);

console.log(" ")

for (let i = 0; i<=10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
}

