import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
const { auth } = require('express-openid-connect');

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '5e4f383218a2a979fcb259b1f3123207a76d2f5bb05919bc2e53d5d0c19f79c6',
  baseURL: 'http://srv.professorsergiolima.com.br',
  clientID: 'V9JrCu9Cx1y9hpAFjMbabxBQq8OSZJ6V',
  issuerBaseURL: 'https://lingapp.us.auth0.com'
};
app.use(auth(config));

app.use(express.json());

app.use(cors());


app.use(routes);
app.use(errorHandler);



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});