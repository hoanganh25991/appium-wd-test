"use strict";

require("./helpers/setup");

var wd = require("wd"),
	_ = require('underscore'),
	actions = require("./helpers/actions"),
	serverConfigs = require('./helpers/appium-servers'),
	_p = require('./helpers/promise-utils'),
	Q = require('q');

wd.addPromiseChainMethod('swipe', actions.swipe);

describe("test on pos.hoicard", function(){
	this.timeout(300000);
	var driver;
	var allPassed = true;

	before(function(){
		var serverConfig = process.env.npm_package_config_sauce ?
			serverConfigs.sauce : serverConfigs.local;
		driver = wd.promiseChainRemote(serverConfig);
		require("./helpers/logging").configure(driver);

		var desired = process.env.npm_package_config_sauce ?
			_.clone(require("./helpers/caps").android18) :
			_.clone(require("./helpers/caps").android19);
		desired.app = 'https://rightfrom.us/beta/app-folder/hoipos/beta/latest_staging.apk';
		if(process.env.npm_package_config_sauce){
			desired.name = 'android - complex';
			desired.tags = ['sample'];
		}
		return driver
			.init(desired)
			.setImplicitWaitTimeout(5000);
	});

	after(function(){
		return driver
			.quit()
			.finally(function(){
				if(process.env.npm_package_config_sauce){
					return driver.sauceJobStatus(allPassed);
				}
			});
	});

	afterEach(function(){
		allPassed = allPassed && this.currentTest.state === 'passed';
	});

	it("should find an element", function(){
		return driver
			.sleep(20000) //app loading data, quite long, has check for 10000
			// .elementByName('Start activity')
			.elementByName('Ling (mgr)')
			.click()
			.sleep(4000) //long load
			.elementByName(' Open Drawer') // Open Drawer
			.elementByName(' Take Away') // Take Away
			.elementByName(' Edit Layout') // Edit Layout
			.elementByName('T19')
			.click()
			.sleep(1000)
			.elementByName('Cancel')
			.click()
			.sleep(1000)
			.elementByName(' Edit Layout') // Edit Layout
			.click()
			.sleep(4000) //long load
			.elementByName('+')
			.click()
			.sleep(3000)
			.elementByAccessibilityId('us.originally.hoicard.debug:id/et_password')
			.text("abc")
			.elementByName('Ok')
			.click()
			// .back()
			.sleep(1000)
			;
	});
});