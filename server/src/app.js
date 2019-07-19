import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const port = 8081;

const app = express();
app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello Good++!' });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
