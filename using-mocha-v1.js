var util = require('util');
var Mocha = require('mocha');

// Instantiate a Mocha instance.
var mocha = new Mocha({});

mocha.addFile('test.js');

// mocha.reporter('ti-reporter');



var passes = 0;
var failures = 0;

var log = {
	status: false,
	content: ''
};

// // Run the tests.
// mocha.run()
// 	.on('pass', function(test){
// 		passes++;
// 		log.content += util.format('Pass: %s\n', test.fullTitle());
// 	})

// 	.on('fail', function(test, err){
// 		failures++;
// 		log.content += util.format('Fail: %s\n-- error: %s\n', test.fullTitle(), err.message);
// 	})

// 	.on('end', function(){
// 		log.content += util.format('\nEnd: %d/%d\n', passes, passes + failures);

// 		var isAllPassed = passes == (passes + failures);

// 		log.status = isAllPassed;

// 		// console.log(log.content);

// 		// runner.log = process.log;
		
// 		process.exit(failures);
// 	});

// var sendNotification = require('slack');	

// var attachmentTxt = "<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|test on pos.hoicard>";


mocha.run()
    .on('pass', function(test) {
        passes++;
    })
    .on('fail', function(test, err) {
        failures++;
        log.content += util.format('--------\nTest title: %s\nTest duration: %sms\n%s', test.title, test.duration, (err + '\n'));
    })
    .on('end', function() {
        var summary = util.format('Passes/Total: %d/%d', passes, (passes + failures));

        var consoleOutput = log.content;

        var isAllPassed = passes == (passes + failures);

		var color = isAllPassed ? "good" : "danger";

		var attachmentTxt = "<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|Test on pos.hoicard>";

		var attachments = {
			"attachments": [
				{
					"fallback": "Test on pos.hoicard",
					"text": attachmentTxt,
					"fields": [
						{
							"title": summary,
							"value": consoleOutput,
							"short": true
						}
					],
					"color": color
				}
			]
		};

		var sendNotification = require('./helpers/slack');	

		sendNotification(attachments, 'a.torin');

    })
    .on('exit', function(failures){
    	process.exit(failures);
    });