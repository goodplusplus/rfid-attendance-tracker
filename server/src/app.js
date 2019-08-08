import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
// import * as pgp from 'pg-promise';

import { connection } from '../dbcon';

const pgp = require('pg-promise')();

const port = 8081;
const db = pgp(connection);

const app = express();
app.use(json());
app.use(cors());

db.one('SELECT * FROM login')
  .then(res => console.log(res));

app.get('/', (req, res) => {
  res.send({ message: 'Hello Good++!' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Credentials received!' });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
