const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

app.use(cors());
app.use(bodyParser.json({
    limit: '4MB'
}))
app.use(routes);

module.exports = app;
