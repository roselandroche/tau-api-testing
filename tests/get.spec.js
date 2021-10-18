const app = require("../app/src/app");
const request = require("supertest");
const expect = require("chai").expect;

// tests

describe("get request", () => {
  it("gets course id", () => {
    request(app)
      .get("/course/1")
      .end((err, res) => {
        expect(res.body.id).to.be.equal("1");
      });
  });
  // localhost/course?name=mocha
  it("gets query param name", (done) => {
    request(app)
      .get("/course")
      .query({ name: "mocha" })
      .expect(200, { id: "1", name: "mocha" }, done);
  });
});
