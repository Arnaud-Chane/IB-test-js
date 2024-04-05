const composition = require('../exercices_start/06_composition.js');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

describe("Running tests for composition operators : ", () => {
  it("Concatenate two arrays", () => {
    expect(composition.concat(array1, array2)).toStrictEqual([1, 2, 3, 4, 5, 6])
  });

  it("Push a new item in array", () => {
    expect(composition.push(array1, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  it("Merge two objects", () => {
    expect(composition.merge(obj1, obj2)).toStrictEqual({a: 1, b: 2, c: 3, d: 4})
  })

  it("Set a new name to object", () => {
    expect(composition.setName({name: 'toto'}, 'titi')).toStrictEqual({name: 'titi'});
  });
});
