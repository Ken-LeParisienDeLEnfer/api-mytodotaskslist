module.exports = function(app) {

    var tache = require('../controllers/tache.controller.js');

    app.post('/tache', tache.create);

    app.get('/tache', tache.findAll);

    app.get('/tache/:id', tache.findOne);

    app.put('/tache/:id', tache.update);

    app.delete('/tache/:id', tache.delete);
};