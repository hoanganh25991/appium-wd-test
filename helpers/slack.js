var request = require("request");

var options = {
	method: 'POST',
	// url: 'https://loremipsum.slack.com/services/hooks/incoming-webhook?token=37rlKOfjRpEoZ',
	url: 'https://hooks.slack.com/services/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',
	//test on my slac "redoc.slack"
	body: ''
};

// var attachments = {
//     "attachments": [
//         {
//             "fallback": "test on pos.hoicard",
//             "text": "<https://github.com/hoanganh25991/appium-wd-test/blob/master/wd-test-android-basic-work.js|test on pos.hoicard>",
//             "fields": [
//                 {
//                     "title": "Console ouput",
//                     "value": "fail: %s\n-- error: %s\n",
//                     "short": true
//                 }
//             ],
//             // "color": "good"
//             "color": "danger"
//         }
//     ]
// };

var sendNotification = function(attachments, url){
	var urlX = (url == 'a.torin') ? 
						'https://loremipsum.slack.com/services/hooks/incoming-webhook?token=37rlKOfjRpEoZ' :
						'https://hooks.slack.com/services/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'
	options.body = JSON.stringify(attachments);
	options.url = urlX;
	request(options);
};

// sendNotification(attachments);

module.exports = sendNotification;

