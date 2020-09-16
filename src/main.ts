import express from "express";
import { fstat, readFileSync } from "fs";
import { join } from "path";
const Transbank = require("transbank-sdk");

const app = express();

// const webpay = new Transbank.Webpay()
//   .withConfiguration(Transbank.Configuration.forTestingWebpayPlusNormal())
//   .getNormalTransaction();

const readKey = (file: string) =>
  readFileSync(join(__dirname, file), { encoding: "utf-8" });
const key = readKey("597029124456.key");
const csr = readKey("597029124456.csr");
const crt = readKey("597029124456.crt");

const configuration = new Transbank.Configuration()
  .withCommerceCode("asdasd")
  .withPrivateCert(key)
  .withPublicCert(csr)
  .usingEnvironment(Transbank.environments.integration);

const transaction = new Transbank.Webpay(configuration);

console.log(transaction);

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.listen(3000, () => {
  console.log("Server started in 3000 port");
});
