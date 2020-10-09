require('dotenv').config();

import express, { Request } from 'express';
import WebpayPlusController from './controllers/WebpayNormalController';
import morgan from 'morgan';

const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Loggin
morgan.token('cookies', (req: Request) => JSON.stringify(req.headers.cookie));
app.use(
   morgan(':method :status :url :cookies ms', {
      stream: {
         write: console.log,
      },
   }),
);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.render('home');
});

/*
 |--------------------------------------------------------------------------
 | Webpay Plus Normal
 |--------------------------------------------------------------------------
 */
app.get('/webpay-normal/init', WebpayPlusController.init);

app.post('/webpay-normal/response', WebpayPlusController.response);

app.post('/webpay-normal/finish', WebpayPlusController.finish);

app.listen(port, () => {
   console.log(`Ejecutando demo en http://localhost:${port} 🚀`);
});
