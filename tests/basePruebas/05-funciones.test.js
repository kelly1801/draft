import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
describe("Test functions", () => {
  // the objects in js point to different memory values so even y the have the same keys and values, they wont be never the same
  // so here instead of toBe , we should use toEqual or toStrictEqual
  test("getUser has to return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUserActive has to return an object", () => {
    const name = "kelly"
    const user = getUsuarioActivo(name);

    expect(user).toMatchObject({username: 'kelly'})
  });
});
