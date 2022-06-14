const assert = require("assert");
const { Given, When, Then, BeforeStep } = require("@cucumber/cucumber");

const MarsRover = require("../src/index");

let robo;

BeforeStep(() => {
  robo = new MarsRover([3, 2], 'N', [5,5]);
});

// Setar posicao inicial
Given("posicao X igual a 3 e a Y igual 2", () => {
  robo;
});

Then("ao iniciar o rover a posicao devera ser x = 3 e y = 2", () => {
  assert.strictEqual(robo.getPosicao[0], 3);
  assert.strictEqual(robo.getPosicao[1], 2);
});

// Setar direcao inicial
Given("direcao N", () => {
    robo;
})

Then("ao iniciar o rover a direcao dever ser N", () => {
    assert.equal(robo.getDirecao, 'n')
})

// Setar plato inicial
Given("plato de dimensao 5 x 5", () => {
    robo;
})

Then("ao iniciar o rover o plato deve ter x = 5 e y = 5", () => {
    assert.equal(robo.getPlato[0], 5)
    assert.equal(robo.getPlato[1], 5)
})