const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
env.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res, next) => {
  res.send("Hello");
});

app.post("/payment/process", async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "CHAI CORP",
      },
    });

    res
      .status(200)
      .json({ success: true, client_secret: myPayment.client_secret });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/stripeapikey", async (req, res, next) => {
  try {
    res.status(200).json(process.env.STRIPE_API_KEY);
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
