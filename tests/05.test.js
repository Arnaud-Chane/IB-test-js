const arrayOperations = require('../exercices_start/05_arrayOperations.js');

const arrayForTest = [2, 1, 5, 4, 8];
const arrayNames = ['Alice', 'Bob', 'Anna', 'John', 'Alex', 'Doe'];
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'},
];

test("Multiply by two each item of array", () => {
  expect(arrayOperations.multiplyByTwo(arrayForTest)).toStrictEqual([4, 2, 10, 8, 16]);
});

test("Filter names starting by 'A'", () => {
  expect(arrayOperations.filterNameStartByA(arrayNames)).toStrictEqual(['Alice', 'Anna', 'Alex']);
});

test("Sum all items from array", () => {
  expect(arrayOperations.sum(arrayForTest)).toBe(20);
})

test("Find user by id", () => {
  expect(arrayOperations.findUserById(users, 4)).toBe('Bar');
});