const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Ig3hgSHtjlrMibMpw0BObMNCDj62BAdpysy1UhRwIK8nc0D54ek5sFJwzaSRdhMNFTxuBEY1KccGvWhhAxhgcVp00BcmRSTNA')

// API

//-Api Config
const app = express();

//- Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//- Api Routes
app.get('/', (request, response) => response.status(200).send('HELLO WORLD'))
app.post('/payment/create', async (request, response) => {
  const total = request.query.total;

  console.log('payment', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//-Listen Command
exports.api = functions.https.onRequest(app)
