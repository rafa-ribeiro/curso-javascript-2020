const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, 'tipo:', typeof peso1);
console.log(Number.isInteger(peso1));
console.log(peso2, 'tipo:', typeof peso2);
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2);
console.log(total.toFixed(2));
console.log(total.toString(2)); // em binário