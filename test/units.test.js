const foo = require("../src/foo");

describe("Unit Testing", () => {

  test("foo", () => {
    const mockMath = Object.create(global.Math);

    mockMath.random = () => 1;
    global.Math = mockMath;
    // console.log(Math.random());
    expect(foo()).toBe(true);

    mockMath.random = () => 0;
    global.Math = mockMath;
    expect(foo()).toBe(false);

  });

}); // describe