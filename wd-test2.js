'use strict';

require('./helpers/setup');

var wd = require('wd'),
	_ = require('underscore'),
	actions = require('./helpers/actions'),
	serverConfigs = require('./helpers/appium-servers'),
	_p = require('./helpers/promise-utils'),
	Q = require('q');

wd.addPromiseChainMethod('swipe', actions.swipe);

var dummyAction = function(count) {
  	var action = new wd.TouchAction(this);

  	var c = count? count : 1;

	while(count > 0){
		action
			.press({x: 15, y: 15})
			.wait(3000)
			.moveTo({x: 45, y: 45})
			.release()
			.perform();
		c--;
	}

	return action.perform();
}

wd.addPromiseChainMethod('dummyAction', dummyAction);



describe('test on pos.hoicard', function(){
	this.timeout(300000);
	var driver;
	var allPassed = true;

	before(function(){
		var serverConfig = process.env.npm_package_config_sauce ?
			serverConfigs.sauce : serverConfigs.local;
		driver = wd.promiseChainRemote(serverConfig);
		require('./helpers/logging').configure(driver);

		var desired = process.env.npm_package_config_sauce ?
			_.clone(require('./helpers/caps').android18) :
			_.clone(require('./helpers/caps').android19);
		desired.app = 'D:/work-station/web-driver-test-device/apk-file/latest_staging.apk';
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

	it('should find an element', function(){
		// driver.dummyAction = function(count){
		// 	var c = count ? count : 1;
		// 	while(c > 0){
		// 		driver
		// 			.execute("mobile: scroll", [{direction: 'down'}])
		// 			.sleep(3000)
		// 		c--;
		// 	}
		// };
		return driver
			// .sleep(17000) //app loading data, quite long, has check for 10000
			// .elementByName('Start activity')
			// .elementByName('Ling (mgr)')
			.waitForElement('name', 'Ling (mgr)',  17000)
			.should.eventually.exist
			.click()
			// .sleep(4500) //long load
			// .elementByName(' Open Drawer') // Open Drawer
			.waitForElement('name', ' Open Drawer', 4500) // Open Drawer
			.elementByName(' Take Away') // Take Away
			.should.eventually.exist
			.elementByName(' Edit Layout') // Edit Layout
			.should.eventually.exist
			.elementByName('T19')
			.click()
			// .sleep(1000)
			// .elementByName('Cancel')
			.waitForElement('name', 'Cancel', 4500)
			.click()
			.sleep(500)
			.elementByName(' Edit Layout') // Edit Layout
			.click()
			// .sleep(4000) //long load
			// .elementByName('+ Add Table')
			.waitForElement('name', '+ Add Table', function(){
				// driver
				// 	.execute("mobile: scroll", [{direction: 'down'}])
				// 	.sleep(3000);
				driver.dummyAction();
				return false;
			}, 8000)
			.should.eventually.exist
			
			.click()
			.waitForElement('name', 'Ok', 500)
			.keys(['hello anh Torin'])
			.elementByName('Ok')
			.click()
			.waitForElement('name', 'hello anh Torin1', 4500)
			.sleep(1000)
			;
	});
});