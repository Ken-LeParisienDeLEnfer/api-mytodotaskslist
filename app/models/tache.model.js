var mongoose = require('mongoose');

var TacheSchema = mongoose.Schema({
    titre: {type: String, required: true},
    priorite: {type: Number, required: false, default: 5},
    projet: {type: String, required: false, default: "Autre"},
    type: String,
    etat: {type: String, required: false, default: "TODO"},
    porteurs: {type: [String], required: false, default: ["KEL"]},
    dateCreation: {type: Date, required: false, default: Date.now()},
    dateResolutionSouhaitee: Date,
    dateResolution: Date,
    urgent: {type: Boolean, required: false, default: false}
});


module.exports = mongoose.model('Tache', TacheSchema, "Taches");