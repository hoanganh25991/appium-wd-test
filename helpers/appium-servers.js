
exports.local = {
  host: 'localhost',
  port: 4723,
  desiredCapabilities: {
		// app: 'browser',
		// browserName: 'chrome',
		// app: 'D:\\work-station\\webdriverio-test\\latest_dev.apk',
		// autoLaunch: true,
		platformName: 'android',
		deviceName: 'cutepad TX_A7133_1508_',
		androidDeviceSerial:"03381818297500000000",
	}
};

exports.sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  username: 'hoanganh25991',
  password: '2Haianhem'
};
