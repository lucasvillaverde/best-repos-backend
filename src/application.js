const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

app.use(express.json({
    limit: '4MB'
}));
app.use(cors());

app.use(routes);

module.exports = app;
