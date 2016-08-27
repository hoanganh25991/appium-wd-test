var devices = require('./helpers/config.js');

if(devices.length == 0)
	console.log('No device to test');

var testAndroidBasicWork = require('./wd-test-android-basic-work.js');

devices.forEach(function(device){
	testAndroidBasicWork(device);
});
