const axios = require("axios").default;
const qs = require("querystring");

async function checkout() {
  console.log("loading...");
  const { data } = await axios.post(
    "https://switch.mtf.gateway.mastercard.com/api/nvp/version/66",
    qs.stringify({
      apiOperation: "INITIATE_CHECKOUT",
      apiPassword: "fb1694d371ab10ab16bee6e28e473f5b",
      apiUsername: "merchant.TEST90006000",
      merchant: "TEST90006000",
      "interaction.operation": "AUTHORIZE",
      "order.id": "12345nss",
      "order.amount": "100.00",
      "order.currency": "USD",
      "order.description": "Test Order",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(data);
}

checkout();
  