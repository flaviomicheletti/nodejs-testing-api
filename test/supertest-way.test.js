const assert = require('assert');
const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
  });

  describe('GET /random', function () {
    it('responds with json', function () {
      return request(app)
        .get('/random')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert(true, Number.isInteger(response.body.value))
        })
    });
  });
});