const axios = require("axios").default;
const qs = require("querystring");

async function checkout() {
  console.log("loading...");
  const token = Buffer.from(
    `merchant.TEST90006000:fb1694d371ab10ab16bee6e28e473f5b`,
    "utf8"
  ).toString("base64");

  await axios
    .post(
      "https://switch.mtf.gateway.mastercard.com/api/rest/version/64/merchant/TEST90006000/session",
      {
        apiOperation: "INITIATE_CHECKOUT",
        interaction: {
          operation: "PURCHASE",
        },
        order: {
          amount: "100",
          currency: "IQD",
          description: "Ordered goods",
          id: "order-id",
        },
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    });
}

checkout();
