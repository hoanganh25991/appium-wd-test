var util = require('util');
// var base = require('mocha/lib/reporters/base.js');

var sendNotification = require('./helpers/slack');

process.log = {
	status: false,
	content: ''
};

var tiReporter = function (runner){
	var passes = 0;
	var failures = 0;

	runner.on('pass', function(test){
		passes++;
		process.log.content += util.format('Pass: %s\n', test.fullTitle());
	});

	runner.on('fail', function(test, err){
		failures++;
		process.log.content += util.format('Fail: %s\n-- error: %s\n', test.fullTitle(), err.message);
	});

	runner.on('end', function(){
		process.log.content += util.format('\nEnd: %d/%d\n', passes, passes + failures);

		var isAllPassed = passes == (passes + failures);

		process.log.status = isAllPassed;

		var attachmentTxt = "<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|test on pos.hoicard>";

		var consoleOutput = process.log.content;

		var color = isAllPassed ? "good" : "danger";

		// var attachments = {
		// 	"attachments": [
		// 		{
		// 			"fallback": "test on pos.hoicard",
		// 			"text": attachmentTxt,
		// 			"fields": [
		// 				{
		// 					"title": "Console ouput",
		// 					"value": consoleOutput,
		// 					"short": true
		// 				}
		// 			],
		// 			"color": color
		// 		}
		// 	]
		// };
		var attachments = {
			"attachments": [
				{
					"fallback": "test on pos.hoicard",
					"text": "<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|test on pos.hoicard>",
					"fields": [
						{
							"title": "Console ouput",
							"value": "fail: %s\n-- error: %s\n",
							"short": true
						}
					],
					// "color": "good"
					"color": "danger"
				}
			]
		};

		sendNotification(attachments);
		
		console.log(process.log.content);
		
		process.exit(failures);
	});

};

module.exports = tiReporter;