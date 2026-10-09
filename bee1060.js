const { question } = require("readline-sync");

let numero;
let contador = 0;
for (let i = 1; i <= 6; i++) {

  numero = Number(question(""));
  if (numero > 0) {
    contador++
  }


}

console.log(contador, "valores positivos")
