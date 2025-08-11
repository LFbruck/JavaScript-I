const pesos = [];
const pesosInvertido = [];
pesos.push(10, 20, 30, 40, 50);

let contador = 4;

while (contador >= 0) {
  pesosInvertido.push(pesos[contador]);
  contador--;
}

console.log(pesosInvertido);
