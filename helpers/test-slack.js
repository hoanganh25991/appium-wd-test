var send = require('./slack');

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

send(attachments);