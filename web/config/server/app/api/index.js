var db = require('../../config/database');

var api = {}

api.adiciona = function(req, res) {
    var device = req.body;
    delete device._id;
    db.insert(device, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.atualiza = function(req, res) {
    db.update({_id : req.params.id }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

api.remove = function(req, res) {
    db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.busca = function(req, res) {
   db.findOne({_id: req.params.id }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.lista = function(req, res) {
    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPorGrupo = function(req, res) {
    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });

};

api.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'esporte'
        }, 
        { 
            _id: 2, 
            nome: 'lugares', 
        }, 
        { 
            _id: 3, 
            nome: 'animais'
        }
    ]);
        
};


module.exports = api;