import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();


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