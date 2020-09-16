import express from "express";
const Transbank = require("transbank-sdk");

const app = express();

const tbk = new Transbank.Webpay()
  .withConfiguration(Transbank.Configuration.forTestingWebpayPlusNormal())
  .getNormalTransaction();

tbk
  .initTransaction(
    1000,
    1,
    1,
    "http://aTestUrl.com",
    "http://aFinalTestUrl.com"
  )
  .then((response: any) => {
    console.log(response);
  })
  .catch((tbkError: any) => {
    console.log("Error");
  });

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.listen(3000, () => {
  console.log("Server started in 3000 port");
});
