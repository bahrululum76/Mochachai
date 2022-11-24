const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;
const userData = require("../data/Data");
const { BOOKING } = require("../data/Data");
// const endpoint = "/booking";
const token = "9bdbea328c9b57f";

describe("POST /booking", function () {
  it("Create booking", async function () {
    const response = await request
      .post("/booking")
      .send({
        firstname: BOOKING.firstname,
        lastname: BOOKING.lastname,
        totalprice: BOOKING.totalprice,
        depositpaid: BOOKING.depositpaid,
        bookingdates: BOOKING.bookingdates,
        additionalneeds: BOOKING.additionalneeds,
      })
      .set("Accept", "application/json");

    expect(response.status).to.eql(200);
    expect(response.body.firstname);
    // console.log(response.body);
  });
});