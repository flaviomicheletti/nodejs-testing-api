const request = require("supertest");
const app = require("../src/app");

describe("Desafio 1", () => {

  test("GET /", () => {
    return request(app)
      .get("/")
      .expect(200);
  });

  it("GET /random", function () {

    Math.random = jest.fn(() => 123);

    return request(app)
      .get('/random')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.value).toBe(123 * 10);
      })
  });

  it("GET /foo positivo", function () {

    Math.random = jest.fn(() => 0.5);

    // const mockMath = Object.create(global.Math);
    // mockMath.random = () => true;
    // global.Math = mockMath;

    return request(app)
      .get('/foo')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.value).toBe(true);
      });

  });

  it("GET /foo negativo", function () {

    Math.random = jest.fn(() => 0.1);

    return request(app)
      .get('/foo')
      .expect('Content-Type', /json/)
      .expect(501)
      .then(response => {
        expect(response.body.value).toBe(false);
      });
  });

}); // describe
