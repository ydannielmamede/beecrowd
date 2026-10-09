const { question } = require("readline-sync");

let numero;
let contador = 0;

for (let i = 1; i <= 5; i++) {
  numero = Number(question(""))

  if (numero % 2 === 0) {
    contador++
  }

}

console.log(contador, "valores pares")
