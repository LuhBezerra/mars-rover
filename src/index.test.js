import MarsRover from "./index";

describe("Mars Rover", () => {
  let robo;
  beforeEach(() => {
    robo = new MarsRover([3, 2], "N", [5, 5]);
  });

  describe("Ao iniciar o rover ...", () => {
    it("deve setar a posicao correta", () => {
      expect(robo.getPosicao).toEqual([3, 2]);
    });

    it("deve setar a direcao correta", () => {
      expect(robo.getDirecao).toEqual("n");
    });

    it("deve setar o plato", () => {
      expect(robo.getPlato).toEqual([5, 5]);
    });
  });

  describe("Ao inserir os comandos (L,R,M) ...", () => {
    it("deve ir do Norte para o Oeste se for L", () => {
      robo.executarComandos("l");
      expect(robo.getDirecao).toEqual("o");
    });

    it("deve ir do Norte para o Sul se for LL", () => {
      robo.executarComandos("LL");
      expect(robo.getDirecao).toEqual("s");
    });

    it("deve ir do Norte para o Leste se for R", () => {
      robo.executarComandos("r");
      expect(robo.getDirecao).toEqual("l");
    });

    it("deve ter posicao [3,3] se executar um M", () => {
      robo.executarComandos("M");
      expect(robo.getPosicao).toEqual([3, 3]);
    });

    it("deve ter como saida 5 1 L caso tenha a inicializao 3 3 L e comandos MMRMMRMRRM", () => {
      robo = new MarsRover([3, 3], "L", [5, 5]);
      robo.executarComandos("MMRMMRMRRM");
      expect(robo.getPosicao).toEqual([5, 1]);
      expect(robo.getDirecao).toEqual("l");
    });

    it("deve lançar uma excecao caso o Rover ultrapasse as margens do plato", () => {
      const resultado = robo.executarComandos("MMMMMMMMMMMMMMM");

      expect(resultado).toEqual("Rover colidiu");
    });

    it("deve lançar uma excecao caso digite um comando inexistente", () => {
      const resultado = robo.executarComandos("MLRB");

      expect(resultado).toEqual("Comando invalido");
    });
  });
});
