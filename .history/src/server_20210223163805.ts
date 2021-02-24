import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import auth from 'express-openid-connect';
import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://srv.professorsergiolima.com.br',
  clientID: 'V9JrCu9Cx1y9hpAFjMbabxBQq8OSZJ6V',
  issuerBaseURL: 'https://lingapp.us.auth0.com'
};

app.use(express.json());

app.use(cors());


app.use(routes);
app.use(errorHandler);



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});