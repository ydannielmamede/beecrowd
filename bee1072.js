const { question } = require("readline-sync");

let entrada = Number(question(""))
let dentro = 0;
let fora = 0;
let numero;

for (let i = 1; i <= entrada; i++) {

  numero = parseInt(question(""))
  if (numero >= 10 && numero <= 20) {
    dentro++
  } else {
    fora++
  }

}

console.log(dentro, "in")
console.log(fora, "out")
