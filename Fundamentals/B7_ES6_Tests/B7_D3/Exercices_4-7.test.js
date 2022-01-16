const functions = require("./Exercices_4-7");

describe("Testes Encode e Decode", () => {
  it("Encode existe e é função", () => {
    expect(typeof functions.encode).toBe("function");
  });
  it("Decode existe e é função", () => {
    expect(typeof functions.decode).toBe("function");
  });
  it('Encode com parametro "aeonium" retorna "124n35m"', () => {
    expect(functions.encode("aeonium")).toBe("124n35m");
  });
  it('Decode com parametro "124n35m" retorna "aeonium"', () => {
    expect(functions.decode("124n35m")).toBe("aeonium");
  });
  it('Encode com pametro "qwrtypsdfghjklçzxcvbnm" não altera nada', () => {
    expect(functions.encode("qwrtypsdfghjklçzxcvbnm")).toBe(
      "qwrtypsdfghjklçzxcvbnm"
    );
  });
  it('Decode com parametro "67890" não altera nada', () => {
    expect(functions.decode("67890")).toBe("67890");
  });
  it("Encode não muda o tamanho da string", () => {
    expect(functions.encode("qwertyuiop")).toHaveLength(10);
  });
  it("Decode não muda o tamanho da string", () => {
    expect(functions.decode("qwertyuiop")).toHaveLength(10);
  });
});

describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(functions.techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof functions.techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      functions.techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(functions.techList([], "Lucas")).toBe("Vazio!");
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(functions.hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof functions.hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(functions.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(functions.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(functions.hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(functions.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(functions.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});