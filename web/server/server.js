var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(7801, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});
