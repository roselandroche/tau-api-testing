const express = require("express");
const request = require("supertest");
const expect = require("chai").expect;

// set up server
const app = express();

// set up request
app.get("/first", (err, res) => {
  res.status(200).json({
    ok: "response",
  });
});

// tests
describe("first test", () => {
  it("first page returns OK response", () => {
    request(app)
      .get("/first")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });
});
