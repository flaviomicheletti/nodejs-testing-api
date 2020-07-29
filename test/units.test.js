const foo = require("../src/foo");

describe("Unit Testing", () => {

  test("foo", () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(true);
    expect(foo()).toBe(true);

    jest.spyOn(global.Math, 'random').mockReturnValue(false);
    expect(foo()).toBe(false);

  });

}); // describe