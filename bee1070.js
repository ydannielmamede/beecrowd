const { question } = require("readline-sync");

let numero = Number(question(""));

for (let i = 1; i <= 6; i++) {

  if (numero % 2 === 0) {
    numero++
    console.log(numero)
  } else {
    console.log(numero)
  }
  numero = numero + 2

}

