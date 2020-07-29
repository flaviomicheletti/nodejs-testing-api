let utils = require("../src/utils");

describe("Utils", () => {

  test("01", () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(true);
    // jest.spyOn(utils, 'trueOrfalse').mockReturnValue(true);
    expect(utils.trueOrfalse()).toBe(true);

    jest.spyOn(global.Math, 'random').mockReturnValue(false);
    expect(utils.trueOrfalse()).toBe(false);
  });

  test("02", () => {
    Math.random = jest.fn(() => 0.5);
    expect(utils.trueOrfalse()).toBe(true);

    Math.random = jest.fn(() => 0.1);
    expect(utils.trueOrfalse()).toBe(false);
  });


}); // describe