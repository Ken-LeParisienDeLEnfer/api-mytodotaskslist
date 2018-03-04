var mongoose = require('mongoose');

var TacheSchema = mongoose.Schema({
    titre: String,
    priorite: Number,
    projet: String,
    type: String,
    etat: String,
    porteurs: [],
    dateCreation: Date,
    dateResolutionSouhaitee: Date,
    dateResolution: Date,
    urgent: Boolean
}, {
    timestamps: true
});

function Tache(bodyResponse) {
    console.log("constructor");
    this.priorite = bodyResponse.priorite || 5;
    this.projet = bodyResponse.projet;
    this.type = bodyResponse.type;
    this.etat = bodyResponse.etat == null ? "TODO" : bodyResponse.etat;
    this.porteurs = bodyResponse.porteurs == null ? ["Me"] : bodyResponse.porteurs;
    this.dateCreation = new Date();
    this.dateResolutionSouhaitee = bodyResponse.dateResolutionSouhaitee;
    this.dateResolution = bodyResponse.dateResolution;
    this.urgent = bodyResponse.urgent == null ? false : bodyResponse.urgent;
}

module.exports = mongoose.model('Tache', TacheSchema, "Taches");