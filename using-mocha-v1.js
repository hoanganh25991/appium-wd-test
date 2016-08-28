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

        var isAllPassed = passes == (passes + failures);

		var color = isAllPassed ? 'good' : 'danger';

		var attachmentTxt = '<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|Test on pos.hoicard>';

		var message = {
			"text": "Jenskin console output",
			"attachments": [
				{
					"fallback": "Test on pos.hoicard",
					"text": attachmentTxt,
					"fields": [
						{
							"title": summary,
							"value": log.content,
							"short": true
						}
					],
					"color": color
				}
			]
		};

		var sendNotification = require('./helpers/slack');	

		// sendNotification(message);
		sendNotification(message, 'a.torin');

    })
    .on('exit', function(failures){
    	process.exit(failures);
    });