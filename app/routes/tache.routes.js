module.exports = function(app) {

    app.all('/tache', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Accept, Content-Type,X-Requested-With");
        res.header("Access-Control-Allow-Methods" , "GET, POST, PUT, DELETE, OPTIONS");
        next();
    });

    var tache = require('../controllers/tache.controller.js');

    app.post('/tache', tache.create);

    app.get('/tache', tache.findAll);

    app.get('/tache/:id', tache.findOne);

    app.put('/tache/:id', tache.update);

    app.delete('/tache/:id', tache.delete);
};