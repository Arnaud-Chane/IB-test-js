const ternaire = require('../exercices_start/02_ternaire.js');

test('retourne la valeur la plus grande des deux paramètres', () => {
  expect(ternaire(1, 2)).toBe(2);
  expect(ternaire(2, 1)).toBe(2);
  expect(ternaire(2, 2)).toBe(2);
  expect(ternaire(1, 1)).toBe(1);
  expect(ternaire(0, 0)).toBe(0);
  expect(ternaire(-1, -1)).toBe(-1);
  expect(ternaire(-1, 0)).toBe(0);
  expect(ternaire(0, -1)).toBe(0);
});