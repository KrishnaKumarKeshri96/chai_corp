const express = require("express");
const cors = require("cors");
const env = require("dotenv");
env.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res, next) => {
  res.send("Hello");
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
