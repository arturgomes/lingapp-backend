import express from 'express';
import * as cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();


app.use(express.json());

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};

//use cors middleware

app.use(cors(options));
// app.use(cors({
//   origin: ["https://www.professorsergiolima.com.br",
//   "https://professorsergiolima.com.br",
//   "https://gerencia.professorsergiolima.com.br",
//   "https://app.professorsergiolima.com.br"],
//   credentials: true
// }))

app.use(routes);
app.use(errorHandler);



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});