//exec cmd from node
var exec = require('child_process').execSync;
var parseColumns = require('parse-columns');

var handle = function(stdout){
	var devicesInfo = parseColumns(stdout);
	// console.log(devicesInfo);
	
	var devices = [];

	devicesInfo.forEach(function(deviceInfo){
		var info = deviceInfo['List of devices attached'];

		var arr = info.split(/\s+/);
		// [ '03381818297500000000',
		//   'device',
		//   'product:astar_inet',
		//   'model:cutepad_TX_A7133_1508_',
		//   'device:astar-inet' ]

		var tmp = {};

		tmp.deviceName = arr[3].replace('model:', '');

		tmp.androidDeviceSerial = arr[0];

		devices.push(tmp);
	});

	return devices;
	
};

var a = exec("adb devices -l");

var devices = handle(a.toString());

console.log(devices);

module.exports = devices;
