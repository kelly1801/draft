import heroes from "../../src/data/heroes";
import {
  getHeroeById,
  getHeroeByOwner,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Puebas de heroes", () => {
  test("getHeroesById debe retornar un heroe por ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroesById debe retornar undefined si el id no existe ", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeUndefined();
  });

  test("getHeroesByOwner debe retornar '{owner: 'DC'} y el length debe ser 3' ", () => {
    const dc = getHeroesByOwner("DC");

    expect(dc.length).toEqual(3);
    expect(dc).toEqual( dc.filter( hero => hero.owner === "DC"))
  });

  test("getHeroesByOwner debe retornar '{owner: 'Marvel'} y el length debe ser 2' ", () => {
    const mar = getHeroesByOwner("Marvel");

    expect(mar.length).toEqual(2);
    expect(mar).toEqual( mar.filter( hero => hero.owner === "Marvel"))
  });



});
