//var sys  = require('sys');
var exec = require('child_process').exec;

child = exec('../scripts/interruptor.sh 5', function(error, stdout, stderr) {
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
	if (error != null) {
		console.log('exec error: ' + error);
	}
});
