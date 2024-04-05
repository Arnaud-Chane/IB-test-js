const arrow = require('../exercices_start/04_arrow');

test('Return args + 1', () => {
  expect(arrow.arrow1(1)).toBe(2);
  expect(arrow.arrow1(2)).toBe(3);
  expect(arrow.arrow2(1)).toBe(2);
  expect(arrow.arrow2(2)).toBe(3);
})