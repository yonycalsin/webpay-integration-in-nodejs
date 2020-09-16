const Transbank = require("transbank-sdk");

const webpayInstance = new Transbank.Webpay()
  .withConfiguration(Transbank.Configuration.forTestingWebpayPlusNormal())
  .getNormalTransaction();

export default webpayInstance;
