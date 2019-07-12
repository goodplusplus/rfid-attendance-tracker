const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = 8081;

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello Good++!' });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
