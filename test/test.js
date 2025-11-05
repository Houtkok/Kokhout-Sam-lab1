const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");
describe("GET /", () => {
  it("should return Hello, GitHub Actions!", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, GitHub Actions!");
  });
});

describe("GET /test", () => {
  it("should return Hello, CI/CD! (this test is written to pass correctly)", async () => {
    const res = await request(app).get("/test");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, CI/CD!");
  });
});

describe("GET /wrong-test (this test is written to fail)", () => {
  it("should intentionally fail expecting incorrect text", async () => {
    const res = await request(app).get("/test"); // We'll hit the /test route
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("This is NOT Hello, CI/CD!"); // This expectation is incorrect and will cause the test to fail
  });
});
