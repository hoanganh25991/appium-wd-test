var Mocha = require('mocha'),
	fs = require('fs'),
	path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

mocha.addFile('test.js');

// mocha.reporter('list');
mocha.reporter('ti-reporter');

// Run the tests.
var runner = mocha.run(function(failures){
	process.on('exit', function(){
		process.exit(failures);  // exit with non-zero status if there were failures
		console.log('proccess.log', process.log);
	});
});

console.log('runner', runner);

