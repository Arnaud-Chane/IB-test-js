const ternaryChain = require('../exercices_start/03_ternaireChain.js');

test("Display >, < or = depending on the values of a and b", () => {
  expect(ternaryChain(1, 2)).toBe("<");
  expect(ternaryChain(2, 1)).toBe(">");
  expect(ternaryChain(1, 1)).toBe("=");
});