import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

<<<<<<< HEAD
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => {
=======
// app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(process.env.PORT || 3333, () => {
>>>>>>> c420e58b0c84ac4a8aefe83a0e95e0c67ea935b4
  console.log('Server started!');
});