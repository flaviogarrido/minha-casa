var exec = require('child_process').exec;

module.exports = function(app) {

	app.get('/gpio/:id', (req, res) => {

		child = exec('/home/pi/minha-casa/scripts/interruptor.sh ' + req.params.id, function(error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error != null) {
				console.log('exec error: ' + error);
			}
		});

		res.status(200).end();

	});

}
