var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var dbConfig = require('./config/bdd.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

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

app.listen(3000, function(){
    console.log("API en écoute - port 3000");
});