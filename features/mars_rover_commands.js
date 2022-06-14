const assert = require("assert");
const { Given, When, Then, BeforeStep } = require("@cucumber/cucumber");

const MarsRover = require("../src/index");

let robo;
let resultado;

// Virar para esquerda
Given("a direcao Norte", () => {
  robo = new MarsRover([3, 2], "N", [5, 5]);
});

When("inserir o comando L", () => {
  resultado = robo.executarComandos("L");
});

Then("o rover deve girar para o Oeste", () => {
  console.log({resultado})
  assert.strictEqual(resultado.direcao, "o");
});

// Virar duas vezes para esquerda
When("inserir o comando LL", () => {
  resultado = robo.executarComandos("LL");
});

Then("o rover deve girar para o Sul", () => {
  assert.strictEqual(resultado.direcao, "s");
});

// Virar para direita
When("inserir o comando R", () => {
  resultado = robo.executarComandos("R");
});

Then("o rover deve girar para o Leste", () => {
  assert.strictEqual(resultado.direcao, "l");
});

// Andar para frente
When("inserir o comando M", () => {
  resultado = robo.executarComandos("M");
});

Then("o rover deve ter a posicao x = 3 e y = 3", () => {
  assert.strictEqual(resultado.posicao[0], 3);
  assert.strictEqual(resultado.posicao[1], 3);
});

// Andar e virar para direita varias vezes
Given("posicao inicial x = 3, y =3 e direcao inicial de L", () => {
  robo = new MarsRover([3, 3], "L");
});

When("executar os comandos MMRMMRMRRM", () => {
  resultado = robo.executarComandos("MMRMMRMRRM");
});

Then(
  "o rover deve ter a posicao final de x = 5 e y = 1 e direcao igual a L",
  () => {
    console.log({resultado})
    assert.strictEqual(resultado.posicao[0], 5);
    assert.strictEqual(resultado.posicao[1], 1);
    assert.strictEqual(resultado.direcao, "l");
  }
);

// Ultrapassagem do plato
When("executar os comandos MMMMMMMMMMMMMMM", () => {
  resultado = robo.executarComandos("MMMMMMMMMMMMMMM");
});

Then("deverar retornar a mesa 'Rover colidiu'", () => {
  assert.strictEqual(resultado, "Rover colidiu");
});

// Execucao de comando inexistente
Given("os comandos MLRB", () => {
  resultado = robo.executarComandos("MLRB");
});

Then("devera retorna a mensagem 'Comando invalido'", () => {
  assert.strictEqual(resultado, "Comando invalido");
});
