const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3004;

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Live on ${PORT}`));