var Tache = require('../models/tache.model.js');

exports.create = function(req, res) {
    var body = req.body;

    if(!body) {
        return res.status(400).send({message: "Tache ne peut pas être vide"});
    }

    var tache = new Tache(body);

    tache.save(function(err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "L'enregistrement de la tâche a échoué"});
        }
            return res.send(data);
    });
};

exports.findAll = function(req, res) {
    Tache.find(function(err, taches){
        if(err) {
            console.log(err);
            return res.status(500).send({message: "La récupération des tâches a échoué"});
        } else if (!Array.isArray(taches) || !taches.length) {
            return res.status(204).send();
        }
        return res.send(taches);
    });
};

exports.findOne = function(req, res) {
    Tache.findById(req.params.id, function(err, tache) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "La récupération de la tache pour id " + req.params.id + " a echoué"});
        } else if(!tache) {
            return res.status(404).send({message: "Aucune tâche trouvéee pour id " + req.params.id});
        }

        return res.send(tache);
    });
};

exports.update = function(req, res) {
    Tache.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, tache) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "La mise a jour de la tache pour id " + req.params.id + " a echoué"});
        }
        return res.send(tache);
    });
};

exports.delete = function(req, res) {
    Tache.findByIdAndRemove(req.params.id, function(err, tache) {
        if (err) {
            console.log(err);
            return res.status(500).send({message: "La suppression de la tache pour id " + req.params.id + " a echoué"});
        } else if (!tache) {
            return res.status(404).send({message: "Aucune tâche trouvée pour id" + req.params.id});
        }
        return res.status(204).send();
    });
};