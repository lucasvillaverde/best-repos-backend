const OwnerController = require('./controllers/OwnerController');
const RepositoryController = require('./controllers/RepositoryController');

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: "World" });
});

//Repositories
routes.get('/repositories', RepositoryController.index);
routes.get('/repositories/:id', RepositoryController.find);
routes.post('/repositories', RepositoryController.store);
routes.delete('/repositories', RepositoryController.delete);

//Owners
routes.get('/owners', OwnerController.index);
routes.get('/owners/:id', OwnerController.find);
routes.post('/owners', OwnerController.store);

module.exports = routes;