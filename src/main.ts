import express from "express";
import { readFileSync } from "fs";
import { join } from "path";
import FormData from "form-data";
import http from "http";
import Url from "url";

const Transbank = require("transbank-sdk");

const app = express();

const readKey = (file: string) =>
  readFileSync(join(__dirname, file), { encoding: "utf-8" });
const key = readKey("597029124456.key");
const csr = readKey("597029124456.csr");
const crt = readKey("597029124456.crt");

const transaction = new Transbank.Webpay(
  Transbank.Configuration.forTestingWebpayPlusNormal()
).getNormalTransaction();

const amount = 1000;
// Identificador que será retornado en el callback de resultado:
const sessionId = "mi-id-de-sesion";
// Identificador único de orden de compra:
const buyOrder = Math.round(Math.random() * 999999999);
const returnUrl = "http://localhost:3000/transaccion";
var finalUrl = "http://localhost:3000/comprobante";

transaction
  .initTransaction(amount, buyOrder, sessionId, returnUrl, finalUrl)
  .then((response: any) => {
    const token = response.token;
    const url = response.url;

    const form = new FormData();
    form.append("token_ws", token);

    console.log(form.getBoundary());
  })
  .catch((error: any) => {
    console.log(error.toString());
  });

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.post("/transaccion", () => {
  console.log("Hola desde post transaccion");
});
app.get("/transaccion", () => {
  console.log("Hola desde post transaccion");
});

app.post("/comprobante", () => {
  console.log("Hola desde post comprobante");
});
app.get("/comprobante", () => {
  console.log("Hola desde post comprobante");
});

app.listen(3000, () => {
  console.log("Server started in 3000 port");
});
