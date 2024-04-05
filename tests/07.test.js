const destructuration = require('../exercices_start/07_destructuration.js');

const givenArray = [1, 2, 3];

describe("Running test for destructuration operators : ", () => {

  it("Extract only the two first element of an array", () => {
    expect(destructuration.extractFirstTwo(givenArray)).toStrictEqual([1, 2]);
  });

  it("Extract the rest of the array", () => {
    expect(destructuration.extractRest(givenArray)).toStrictEqual([2, 3]);
  })

  it("Extract the name of an object", () => {
    expect(destructuration.extractName({name: "toto", age: 42})).toStrictEqual("toto");
  });

  it("Remove only the password field of an object", () => {
    expect(destructuration.removePassword({name: "toto", password: "1234"})).toStrictEqual({name: "toto"});
  });
  
});