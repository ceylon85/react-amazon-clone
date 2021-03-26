/* eslint-disable max-len */
// Backend => firebase functions를 통해 서버에 API를 만들어놓는다.

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IWdlsJdM5qUOUeUfuVuKZ2nhbaIfgF84Hq3YWEgCwUF0nFjj8knbI0wsFMSJGOk6j7ikwDdp8CCMMMkP4cE39Mg003YlW3h3S"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/sj", (request, response) => response.status(200).send("hello sj"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Requset Recived!!==> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of the currency
    currency: "usd",
  });
  // OK - Created
  // eslint-disable-next-line no-undef
  response = status(201).send({
    clientSecret: paymentIntent.client__secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint http://localhost:5001/clone-bc826/us-central1/api
