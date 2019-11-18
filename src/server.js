const App = require('./application');
require ('dotenv/config');

const defaultPort = parseInt(process.env.APP_DEFAULT_PORT);

App.listen(defaultPort, function(){
    console.log("Servidor rodando na porta: " + defaultPort);
});