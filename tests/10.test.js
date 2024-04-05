const promise = require("../exercices_start/10_promise.js");

describe("Running test for promise :", () => {
  it("Should return 'Landing' after 2 seconds of waiting :", () => {
    // Use the `expect.assertions` to ensure that a certain number of assertions are called
    expect.assertions(1);

    // Since we are dealing with asynchronous code, we return the promise
    return promise.sleep().then((data) => {
      expect(data).toBe("Landing");
    });
  });
});
