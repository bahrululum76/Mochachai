const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
// const token = "b8b3fccf4cbc977";
describe("DELETE /booking/3096", function () {
  it("delete booking", async function () {
    const response = await request
      .delete("/booking/3096")
      .set({ Cookie: "token=02f76d816c91195" });

    expect(response.status).to.eql(201);
    // expect(response.body.data.length).to.eql(1);
  });
});


