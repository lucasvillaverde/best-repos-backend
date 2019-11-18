const App = require('./application');
require ('dotenv/config');

App.listen(process.env.PORT || 3333, function(){
    console.log("Servidor rodando na porta: " + process.env.PORT || 3333);
});