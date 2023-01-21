describe( "Demon Component test" ,() => {
test("Descripcion de lo que evalua la prueba", () => {
  // Arrange - initialization
  const message1 = "hello world";

  // act - estimulo
  const m2 = message1.trim();

  // evaluation

  expect(message1).toBe(m2);
});
})