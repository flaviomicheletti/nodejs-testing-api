const request = require("supertest");


describe("Testing API", () => {

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
  });
  // afterEach(() => {
  //   jest.spyOn(global.Math, 'random').mockRestore();
  // })

  test("GET /", () => {
    return request(app)
      .get("/")
      .expect(200);
  });

  it("GET /random", function () {
    return request(app)
      .get('/random')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(Number.isInteger(response.body.value)).toBe(true);
      })
  });

  it("GET /foo", function () {
    jest.spyOn(global.Math, 'random').mockReturnValue(123);
    console.log(Math.random());
    // const mockMath = Object.create(global.Math);
    // mockMath.random = () => true;
    // global.Math = mockMath;

    request(app)
      .get('/foo')
      .then(response => {
        expect(response.body.value).toBe(true);
      });

    // mockMath.random = () => 0;
    // global.Math = mockMath;
    // request(app)
    //   .get('/foo')
    //   .then(response => {
    //     expect(Number.isInteger(response.body.value)).toBe(false);
    //   });
  });

}); // describe


const app = require("../src/app");