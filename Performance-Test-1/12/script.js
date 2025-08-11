let salario = 0;
let nome;
let nomeMaior;
let maiorSalario = 0;
let continuar = 0;

while (true) {
  salario = Number(prompt("Qual seu salario? "));
  nome = prompt("Qual seu nome?");
  if (salario > maiorSalario) {
    maiorSalario = salario;
    nomeMaior = nome;
  }
  continuar = Number(prompt("Voce deseja continuar? SIM(1) - NÃO(2)"));

  if (continuar === 2) {
    break;
  }
}
alert("O maior salario é:" + maiorSalario);
alert("O seu nome é:" + nomeMaior);
