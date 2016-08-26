'use strict';

require('./helpers/setup');


var wd = require('wd'),
	_ = require('underscore'),
	actions = require('./helpers/actions'),
	serverConfigs = require('./helpers/appium-servers'),
	_p = require('./helpers/promise-utils'),
	Q = require('q'),
	asserters = wd.asserters;

wd.addPromiseChainMethod('swipe', actions.swipe);

// var dummyAction = function(){
// 	var action = new wd.TouchAction(this);
//
// 	action
// 		.press({x: 15, y: 15})
// 		.wait(300)
// 		.moveTo({x: 45, y: 45})
// 		.release();
//
// 	return action.perform();
// };

wd.addPromiseChainMethod('dummyAction', actions.dummyAction);

describe('test on pos.hoicard', function(){
	this.timeout(300000);

	var driver;

	var allPassed = true;

	before(function(){
		var serverConfig = serverConfigs.local;

		driver = wd.promiseChainRemote(serverConfig);

		require('./helpers/logging').configure(driver);

		var desired = _.clone(require('./helpers/caps').android19);

		desired.app = 'https://rightfrom.us/beta/app-folder/hoipos/beta/latest_staging.apk';

		return driver
			.init(desired)
			// .setImplicitWaitTimeout(5000)
			;
	});

	after(function(){
		return driver
			.quit()
			.finally(function(){
				console.log('congratulation, test done');
			});
	});

	afterEach(function(){
		allPassed = allPassed && this.currentTest.state === 'passed';
	});

	it('should find an element', function(){
		return driver
			// .sleep(20000) //app loading data, quite long, has check for 10000|15000
			// .dummyAction()
			.waitForElement('name', 'Ling (mgr)', 35000)
			// .click()
			// .waitForElement('name', ' Open Drawer', 4500) // Open Drawer
			// .elementByName(' Take Away') // Take Away
			// .elementByName(' Edit Layout') // Edit Layout
			// .elementByName('T19')
			// .click()
			// .waitForElement('name', 'Cancel', 4500)
			// .click()
			// .sleep(500)
			// .elementByName(' Edit Layout') // Edit Layout
			// .click()
			// .sleep(4000)
			// .elementByName('+ Add Table') //+ Add Table|us.originally.hoicard.debug:id/btn_add_table
			// .excute({"cmd": "click", "elementId": "8"})
			// .click()
			// .waitForElement('name', 'Ok', 500)
			// .keys(['hello anh Torin'])
			// .elementByName('Ok')
			// .click()
			// .waitForElement('name', 'hello anh Torin1', 4500)
			// .sleep(1000)
			;
	});
});