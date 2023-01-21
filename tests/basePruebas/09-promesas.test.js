import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas asincronas", () => {
  test("getHeroeAsync has to return a hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toMatchObject({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroeAsync has to throw an error if id doesnt exist", (done) => {
    const id = 100;

  getHeroeByIdAsync(id).catch(error =>
    expect(error).toBe('No se pudo encontrar el héroe')
  )
  done()
  });
});
