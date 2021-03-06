//exec cmd from node
var exec = require('child_process').execSync;
var parseColumns = require('parse-columns');

var isWindows = process.platform == 'win32';

var cwd = process.cwd();

cwd = cwd.replace('helpers', '');

// console.log(cwd);

// var appPathOnMac = cwd + '/app/build/outputs/apk/app-prod-debug.apk';
var appPathOnMac = '/Users/torin/.jenkins/jobs/hoipos-android/lastSuccessful/archive/app/build/outputs/apk/app-prod-debug.apk';

// console.log('appPathOnMac: ', appPathOnMac);

var appPath = isWindows ?
				'https://rightfrom.us/beta/app-folder/hoipos/beta/latest_staging.apk' :
				appPathOnMac;
// console.log('appPath: ', appPath);

var handle = function(stdout){
	var devicesInfo = parseColumns(stdout);
	// console.log(devicesInfo);
	
	var devices = [];

	devicesInfo.forEach(function(deviceInfo){
		var info = deviceInfo['List of devices attached'];

		var arr = info.split(/\s+/);
		// console.log(arr);
		//on windows @@
		// [ '03381818297500000000',
		//   'device',
		//   'product:astar_inet',
		//   'model:cutepad_TX_A7133_1508_',
		//   'device:astar-inet' ]

		//on MAC @@ %$%^%
		// [ '03381818297500000000',
		// 	'device',
		// 	'usb:337838080X',
		// 	'product:astar_inet',
		// 	'model:cutepad_TX_A7133_1508_',
		// 	'device:astar-inet' ]

		var tmp = {};

		tmp.platformName = 'android';

		//detect number, so it is device-serial
		//detect model, to get device-name
		arr.forEach(function(x){
			if(!isNaN(x)){
				tmp.androidDeviceSerial = x;
			}

			if(x.includes('model:')){
				tmp.deviceName = x.replace('model:', '');
			}
		});

		// tmp.deviceName = arr[3].replace('model:', '');
		//
		// tmp.androidDeviceSerial = arr[0];

		tmp.app = appPath;

		devices.push(tmp);
	});

	return devices;
	
};

var a = exec("adb devices -l");

var devices = handle(a.toString());

console.log('List of device:');

console.log(devices);

module.exports = devices;
