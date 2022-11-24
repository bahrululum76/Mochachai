const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
// const { USER_DATA } = require("../data/Data");
const { BOOKING } = require("../data/Data");

describe("PUT /booking/1828", function () {
  it("Create booking", async function () {
    const response = await request
      .put("/booking/1828")
      .send({
        firstname: BOOKING.firstname,
        lastname: BOOKING.lastname,
        totalprice: BOOKING.totalprice,
        depositpaid: BOOKING.depositpaid,
        bookingdates: BOOKING.bookingdates,
        additionalneeds: BOOKING.additionalneeds,
      })
      .set({ Cookie: "token=02f76d816c91195" })
      .set({ Accept: "application/json" });
      // console.log(response);
    expect(response.status).to.eql(200);
    // expect(response.body.firstname).to.eql(firstname);
  }).timeout(100000);
});
