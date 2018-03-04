var Tache = require('../models/tache.model.js');

exports.create = function(req, res) {
    var body = req.body;

    if(!body) {
        return res.status(400).send({message: "Tache ne peut pas être vide"});
    }

    var tache = new Tache(body);
    console.log(body);
    console.log(tache);

    tache.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "L'enregistrement de la tâche a échoué"});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {

};

exports.findOne = function(req, res) {

};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {

};