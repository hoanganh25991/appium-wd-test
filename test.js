var devices = require('./helpers/config.js');

var testAndroidBasicWork = require('./wd-test-android-basic-work.js');

devices.forEach(function(device){
	testAndroidBasicWork(device);
});
