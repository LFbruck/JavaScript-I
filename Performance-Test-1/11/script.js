let contador = 0;

while (true) {
  console.log(contador);
  if (Math.floor(Math.random() * 5) + 1 !== 4) {
    contador++;
  }
  if (Math.floor(Math.random() * 11) + 1 === 10) {
    break;
  }
}
