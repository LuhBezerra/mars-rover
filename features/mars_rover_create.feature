Feature: Criacao do rover

  Scenario: Setar posicao inicial
    Given posicao X igual a 3 e a Y igual 2 
    Then ao iniciar o rover a posicao devera ser x = 3 e y = 2

  Scenario: Setar direcao inicial
    Given direcao N
    Then ao iniciar o rover a direcao dever ser N

  Scenario: Setar plato inicial
    Given plato de dimensao 5 x 5
    Then ao iniciar o rover o plato deve ter x = 5 e y = 5
