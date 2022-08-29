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
      // qs.stringify(
      {
        apiOperation: "CREATE_CHECKOUT_SESSION",
        // apiPassword: "fb1694d371ab10ab16bee6e28e473f5b",
        // apiUsername: "merchant.TEST90006000",
        // merchant: "TEST90006000",
        "interaction.operation": "AUTHORIZE",
        "order.id": "22pikeme3k",
        "order.amount": 100.0,
        "order.currency": "USD",
        // "order.description": "Test Order",
      },
      // ),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // Authorization: `Basic ${token}`,
        },
        // auth: {
        //   username: "merchant.TEST90006000",
        //   password: "fb1694d371ab10ab16bee6e28e473f5b",
        // },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("done");
    });
  // console.log(data);
}

checkout();
