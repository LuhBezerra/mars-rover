Feature: Movimentacao do rover

  Scenario: Virar para esquerda
    Given a direcao Norte
    When inserir o comando L
    Then o rover deve girar para o Oeste

  Scenario: Virar duas vezes para esquerda
    Given a direcao Norte
    When inserir o comando LL
    Then o rover deve girar para o Sul

  Scenario: Virar para direita
    Given a direcao Norte
    When inserir o comando R
    Then o rover deve girar para o Leste

  Scenario: Andar para frente
    Given a direcao Norte
    When inserir o comando M
    Then o rover deve ter a posicao x = 3 e y = 3

  Scenario: Andar e virar para direita varias vezes
    Given posicao inicial x = 3, y =3 e direcao inicial de L
    When executar os comandos MMRMMRMRRM
    Then o rover deve ter a posicao final de x = 5 e y = 1 e direcao igual a L

  Scenario: Ultrapassagem do plato
    Given plato de dimensao 5 x 5
    When executar os comandos MMMMMMMMMMMMMMM
    Then deverar retornar a mesa 'Rover colidiu'

  Scenario: Execucao de comando inexistente
    Given os comandos MLRB
    Then devera retorna a mensagem 'Comando invalido'
