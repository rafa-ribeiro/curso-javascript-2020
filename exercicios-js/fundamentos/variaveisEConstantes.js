var a = 3;
let b = 4;
const c = 5;

// let é uma forma mais moderna de criar variáveis, evite o 'var'
// var pode ser usado para redeclarar a variável 'a'
// Enquanto que, como b foi declarado com let, b não pode ser redeclarada.

console.log(a, b);

var a = 10; // o interpretado da linguagem aceita isso

// let b = 20; ocorre erro pois b não pode ser redeclarada por ter sido declarada anteriormente com let

console.log(a, b);

// var e let são para declaração de variáveis
// const para declaração de constantes