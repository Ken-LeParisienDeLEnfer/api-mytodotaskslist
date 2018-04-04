var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bddConfig = require('./config/bdd.config.js');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(bddConfig.url);

mongoose.connection.on('error', function() {
    console.log('Connection à la base de données impossible');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Connection établie à la base de données");
});

app.get('/', function(req, res){
    res.json({"message": "Hello dude"});
});

require('./app/routes/tache.routes.js')(app);

app.listen(3000, function(){
    console.log("API en écoute - port 3000");
});