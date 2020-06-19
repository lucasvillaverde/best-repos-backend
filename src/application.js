const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

app.use(cors());
app.use(bodyParser.json())
app.use(routes);
app.use(express.json({
    limit: '4MB'
}));

module.exports = app;
