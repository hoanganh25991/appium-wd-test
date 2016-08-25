var webdriverio = require('webdriverio');
// var TouchAction = require('TouchAction');
var options = {
	host: '127.0.0.1',
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
 
var client = webdriverio.remote(options);

client
	.init()
	// .url('https://rightfrom.us/beta/hoipos/')
	// .setValue('#search_form_input_homepage', 'WebdriverIO')
	// .selectByVisibleText('.widget-user-username > a', 'latest_staging.apk')
	// .click('=latest_staging.apk')
	// .getTitle()
	// .then(function(title) {
	//     console.log('Title is: ' + title);

	//     // outputs:
	//     // "Title is: WebdriverIO (Software) at DuckDuckGo"
	// })
	// .installApp('D:\\work-station\\webdriverio-test\\latest_dev.apk', function(){
	// 	console.log('install app');
	// })
	// .installApp('D:\\work-station\\webdriverio-test\\latest_staging.apk')
	// .launch()
	// .end()
	// .openNotifications()
	.isAppInstalled('us.originally.hoicard.debug')
	.rotate(114, 198)
	// .performTouchAction(TouchAction().press(el0).moveTo(el1).release())
	// .execute('mobile: tap', [], function(err){console.log(err);})
	// .currentActivity().then(function() {
	// 	console.log(activity); // returns android activity information
	// })
	.getCurrentDeviceActivity()
	.then(function(activity) {
	    console.log(activity); // returns ".MainActivity"
	})
	.selectByVisibleText('*', 'Ling (mgr)')
	.getText('*')
	.then(function(value){
		console.log(value)
	})
	;