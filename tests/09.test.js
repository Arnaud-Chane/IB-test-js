const concatString = require('../exercices_start/09_strings.js');

describe("Running test for 09 concat String :", () => {

  it("Should return the firstName and lastName concatened", () => {
    expect(concatString.concat("John", "Doe")).toBe("John Doe");
  });

});