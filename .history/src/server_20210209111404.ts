import express, { NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();
var allowCrossDomain = function(req:Request, res:Response, next:NextFunction) {
  res.headers('Access-Control-Allow-Origin', '*');
  res.headers('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.headers('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(express.json());

app.use(cors());
// app.use(cors({
//   origin: ["https://www.professorsergiolima.com.br",
//   "https://professorsergiolima.com.br",
//   "https://gerencia.professorsergiolima.com.br",
//   "https://app.professorsergiolima.com.br"],
//   credentials: true
// }))
// app.options("*", cors());
app.use(routes);
app.use(errorHandler);



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});