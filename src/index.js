export default class MarsRover {
  constructor(
    posicaoInicial = [0, 0],
    direcaoInicial = "n",
    platoInicial = [5, 5]
  ) {
    let posicao = posicaoInicial;
    let direcao = direcaoInicial.toLowerCase();
    const plato = platoInicial;
    const direcoes = ["n", "l", "s", "o"];

    this.getPosicao = posicao;
    this.getDirecao = direcao;
    this.getPlato = plato;

    function mover() {
      switch (direcao) {
        case "n":
          posicao[1] += 1;
          break;
        case "l":
          posicao[0] += 1;
          break;
        case "s":
          posicao[1] += -1;
          break;
        default:
          posicao[0] += -1;
      }
    }

    function girar(comando) {
      let direcaoNumerica = direcoes.findIndex(
        (direcaoAtual) => direcaoAtual === direcao
      );

      if (comando === "l") {
        // Left
        direcaoNumerica = (direcaoNumerica + 4 - 1) % 4;
      } else {
        // Right
        direcaoNumerica = (direcaoNumerica + 1) % 4;
      }

      direcao = direcoes[direcaoNumerica];
    }

    this.executarComandos = function (comandos) {
      const comandosArray = comandos.toLocaleLowerCase().split("");

      if (comandosArray.some((comando) => !/[lrm]/g.test(comando))) {
        return "Comando invalido";
      }

      comandosArray.forEach((comando) => {
        switch (comando.toLocaleLowerCase()) {
          case "l":
          case "r":
            girar(comando);
            break;
          default:
            mover();
        }
      });

      if (
        posicao[0] > plato[0] ||
        posicao[0] < 0 ||
        posicao[1] > plato[1] ||
        posicao[1] < 0
      ) {
        return "Rover colidiu";
      }

      this.getDirecao = direcao;
      this.getPosicao = posicao;
      this.getTest = posicao;

      console.log(
        `${this.getPosicao[0]} ${this.getPosicao[1]} ${this.getDirecao.toLocaleUpperCase()}`
      );
    };
  }
}

const robo = new MarsRover([3, 3], "L", [5, 5]);
robo.executarComandos("MMRMMRMRRM");

