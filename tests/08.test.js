const chainingOperator = require ('../exercices_start/08_chainingOperator.js');

describe("Running test for Chaining operators :", () => {

  it("Should return the groupe name of a user if it exists", () => {
    expect(chainingOperator.getGroupName({name: "John", group: {name: "admin"}})).toBe("admin");
    expect(chainingOperator.getGroupName({name: "John"})).toBe(undefined);
  });

});