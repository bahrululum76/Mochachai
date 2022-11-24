const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const token = "9bdbea328c9b57f";
describe("GET /booking", function () {
  it("returns booking", async function () {
    const response = await request
      .get("/booking")
      .set({ Cookie: "token=02f76d816c91195" });

    expect(response.status).to.eql(200);
    // expect(response.body.data.length).to.eql(1);
  });
});
