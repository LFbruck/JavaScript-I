const idades = [];
idades.push(23, 1, 43, 29);

let menor = idades[0];
let contador = 0;

while (contador < idades.length) {
  if (idades[contador] < menor) {
    menor = idades[contador];
  }
  contador++;
}
console.log(menor);
