const app = require("../src/app");
const request = require("supertest");
const expect = require("chai").expect;

// tests
describe("response", () => {
  // json format
  it("json response returns correct ID", () => {
    request(app)
      .get("/course")
      .end((err, res) => {
        expect(res.body.id).to.be.equal("1");
      });
  });
  // text format
  it("text response content", () => {
    request(app)
      .get("/course")
      .end((err, res) => {
        expect(res.text).to.contain("1");
      });
  });
  //
  it("status response is ok", () => {
    request(app)
      .get("/course")
      .end((err, res) => {
        expect(res.ok).to.be.true;
      });
  });
});
