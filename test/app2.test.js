const request = require("supertest");
const app = require("../src/app");
let utils = require("../src/utils");

describe("Desafio 2", () => {

  it("GET /bar true", function () {

    utils.trueOrfalse = jest.fn(() => true);
    // jest.spyOn(utils, 'trueOrfalse').mockReturnValue(true);

    return request(app)
      .get('/bar')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.value).toBe(true);
      });
  });

  it("GET /bar false", function () {

    utils.trueOrfalse = jest.fn(() => false);
    // jest.spyOn(utils, 'trueOrfalse').mockReturnValue(false);

    return request(app)
      .get('/bar')
      .expect('Content-Type', /json/)
      .expect(501)
      .then(response => {
        expect(response.body.value).toBe(false);
      });
  });


}); // describe
