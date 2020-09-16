import express from "express";
import webpayInstance from "./connectors/webpay";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

webpayInstance;
