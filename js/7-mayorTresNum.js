// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = parseInt(prompt("Ingrese un primer numero"));
const numero2 = parseInt(prompt("Ingrese un segundo numero"));
const numero3 = parseInt(prompt("Ingrese un tercer numero"));

let mayores = [];
let mayor = 0;

if (numero1 > mayor) {
  mayor = numero1;
  mayores = [numero1];
} else if (numero1 === mayor) {
  mayores.push(numero1);
}

if (numero2 > mayor) {
  mayor = numero2;
  mayores = [numero2];
} else if (numero2 === mayor) {
  mayores.push(numero2);
}

if (numero3 > mayor) {
  mayor = numero3;
  mayores = [numero3];
} else if (numero3 === mayor) {
  mayores.push(numero3);
}

document.write("El número o números más grandes son: " + mayores.join(", "));
