import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { connection } from '../dbcon';

const pgp = require('pg-promise')();

const port = 8081;
const db = pgp(connection);

const app = express();
app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello Good++!' });
});

app.post('/login', (req, res) => {
  db.any('SELECT login_pk FROM rfid.login WHERE username=$1 and password=$2',
    [req.body.username, req.body.password])
    .then((data) => {
      if (data.length === 1) {
        res.send({
          id: data[0].login_pk,
          status: true
        });
      }
      else {
        res.send({
          id: 0,
          status: false
        });
      }
    })
    .catch((error) => {
      console.log('ERROR: ', error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
