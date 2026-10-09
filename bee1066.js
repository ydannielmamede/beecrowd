const { question } = require("readline-sync");

let numero;
let numerosPares = 0
let numerosIpares = 0
let numerosNegativos = 0
let numerosPositivos = 0

for (let i = 1; i <= 5; i++) {

  numero = Number(question(""))

  if (numero > 0) {
    numerosPositivos++
  }
  if (numero < 0) {
    numerosNegativos++
  }

  if (numero % 2 == 0) {
    numerosPares++
  } else {
    numerosIpares++
  }

}

console.log(numerosPares, "valor(es) par(es)")
console.log(numerosIpares, "valor(es) impares(es)")
console.log(numerosPositivos, "valor(es) positivos(es)")
console.log(numerosNegativos, "valor(es) negativos(es)")

