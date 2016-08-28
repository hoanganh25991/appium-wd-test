var request = require("request");

var options = {
	method: 'POST',
	// url: 'https://loremipsum.slack.com/services/hooks/incoming-webhook?token=37rlKOfjRpEoZ',
	url: 'https://hooks.slack.com/services/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',
	//test on my slac "redoc.slack"
	body: ''
};

/**
 * samle of message
 */

// {
// 	"text": "Jenskin console output",
// 	"attachments": [
//         {
//             "fallback": "ReferenceError - UI is not defined: https://honeybadger.io/path/to/event/",
//             "text": "<https://honeybadger.io/path/to/event/|ReferenceError> - UI is not defined",
//             "fields": [
//                 {
//                     "title": "Project",
//                     "value": "Awesome Project",
//                     "short": true
//                 },
//                 {
//                     "title": "Environment",
//                     "value": "production",
//                     "short": true
//                 }
//             ],
//             "color": "good"
//             // "color": "warning"
//         }
//     ]
// }

var sendNotification = function(message, url){
	options.body = JSON.stringify(message);
	
	//change with isATorin
	var isATorin = (url == 'a.torin');
	
	var urlX = isATorin ? 
				'https://loremipsum.slack.com/services/hooks/incoming-webhook?token=37rlKOfjRpEoZFvmhVW7Dz7O':
				'https://hooks.slack.com/services/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';

	if(isATorin){
		message.channel = '#notifications';
		message.username = 'appium-test';
		message.icon_url = 'http://rightfrom.us/auto_deploy_icon.png';
		options.url = urlX;
	}
	console.log(JSON.stringify(message));
	request(options);
};

// sendNotification(message);

module.exports = sendNotification;

