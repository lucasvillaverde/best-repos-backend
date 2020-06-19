const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

var corsOptions = {
    origin: 'http://best-repos.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(routes);
app.use(express.json({
    limit: '4MB'
}));

module.exports = app;
