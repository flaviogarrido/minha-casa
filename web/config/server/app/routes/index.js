var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/devices')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/devices/:id')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/grupos', api.listaGrupos)
    app.get('/v1/devices/grupo/:id', api.listaPorGrupo);
        
    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};