const app = require('./config/custom-express')();

api_port = 7001

app.listen(api_port, function(){
  console.log('minha-casa: running');
  console.log('minha-casa: listen on port ' + api_port);
});
