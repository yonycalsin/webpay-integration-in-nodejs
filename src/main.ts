import express from "express";
const Transbank = require("transbank-sdk");

const app = express();

const webpay = new Transbank.Webpay()
  .withConfiguration(Transbank.Configuration.forTestingWebpayPlusNormal())
  .getNormalTransaction();

console.log(webpay);

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.listen(3000, () => {
  console.log("Server started in 3000 port");
});
