const paises = [];
paises.push("brasil", " india", "espanha", "Alemanha", "Espanha");
console.log(paises);
console.log(paises.length);
paises[1] = "italia";
console.log(paises);

paises.push("Finlandia");
console.log(paises);
delete paises[2];
console.log(paises);

paises.pop();
console.log(paises);
