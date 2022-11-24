const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const { USER_DATA } = require("../data/Data");

describe("POST /auth", function () {
  it(" Auth", async function () {
    const response = await request.post("/auth").send({
      username: USER_DATA.username,
      password: USER_DATA.password,
    });

    expect(response.status).to.eql(200);
    expect(response.body.username).to.eql(USER_DATA.username);
    // expect(response.body.password).to.eql(USER_DATA.password);
  });
});