
exports.local = {
  host: 'localhost',
  port: 4723,
  desiredCapabilities: {
		// app: 'browser',
		// browserName: 'chrome',
		// app: 'D:\\work-station\\webdriverio-test\\latest_dev.apk',
		// autoLaunch: true,
		platformName: 'Android SDK_built_for_x86_64',
		deviceName: 'abc',
		androidDeviceSerial:"emulator-5554",
	}
};

exports.sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  username: 'hoanganh25991',
  password: '2Haianhem'
};
