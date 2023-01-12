// modulos e require

console.log("Inicio");

const { nomes, cidades, texto, adicionar } = require("./modulo");
console.log(nomes[1] + " - " + cidades[1]);
console.log(texto);
console.log("Resultado da conta: " + adicionar(10,12));