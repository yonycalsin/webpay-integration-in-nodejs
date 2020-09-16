import Url from "url";

const data = Url.parse(
  "https://webpay3gint.transbank.cl/webpayserver/initTransaction"
);

console.log(data);
