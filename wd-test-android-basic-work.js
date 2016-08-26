'use strict';

var testAndroidBasicWork = function(desiredCapabilities){
	var wd = require('wd'),
		// actions = require('./helpers/actions'),
		serverConfig = {
			host: 'localhost',
			port: 4723,
			desiredCapabilities: desiredCapabilities
		},
		asserters = wd.asserters,
		colors = require('colors'),
		chai = require("chai"),
		chaiAsPromised = require("chai-as-promised"),
		should = chai.should();

	chai.use(chaiAsPromised);

	chaiAsPromised.transferPromiseness = wd.transferPromiseness;

	// wd.addPromiseChainMethod('swipe', actions.swipe);

	// wd.addPromiseChainMethod('dummyAction', actions.dummyAction);

	describe('test on pos.hoicard', function(){
		this.timeout(300000);

		var driver;

		var allPassed = true;

		before(function(){
			driver = wd.promiseChainRemote(serverConfig);

			driver.on('status', function(info){
				console.log(info.cyan);
			});

			driver.on('command', function(meth, path, data){
				console.log(' > ' + meth.yellow, path.grey, data || '');
			});

			driver.on('http', function(meth, path, data){
				console.log(' > ' + meth.magenta, path, (data || '').grey);
			});

			var desired = serverConfig.desiredCapabilities;

			return driver
				.init(desired)
				.setImplicitWaitTimeout(5000);
		});

		after(function(){
			return driver
				.quit();
		});

		afterEach(function(){
			allPassed = allPassed && this.currentTest.state === 'passed';
		});

		it('should load data', function(){
			return driver
			// .waitForElement(
			// 	'id',
			// 	'us.originally.hoicard.debug:id/txt_loading_status',
			// 	5000 //if wait not long enough, status: Check license,...
			// )
			// .text().should.become(' Retrieving outlet data...')
			// ;
			// .waitForElement(
			// 	'name',
			// 	' Retrieving outlet data...',
			// 	5000 //if wait not long enough, status: Check license,...
			// )
				.waitForElementByName(' Retrieving outlet data...', 5000)
				;
		});

		it('should has Ling (mgr)', function(){
			return driver
				.waitForElement(
					'name',
					'Ling (mgr)'
				)
				// .text().should.become('Ling (mgr)')
				// .elementByName('Ling (mgr)')
				.click()
				.sleep(3000)
				;
		});

		it('should see dashboard', function(){
			return driver
				.elementByName(' Open Drawer') // Open Drawer
				.should.eventually.exist
				.elementByName(' Take Away') // Take Away
				.should.eventually.exist
				.elementByName(' Edit Layout') // Edit Layout
				.should.eventually.exist
				.click()
				.sleep(3000)
				;
		});

		it('should add table', function(){
			return driver
				.elementByName('+ Add Table')
				.click()
				.waitForElement('name', 'Ok', 500)
				.keys(['hello anh Torin'])
				.elementByName('Ok')
				.click()
				.waitForElement(
					'name',
					'hello anh Torin1',
					4500
				);
		});

		it('should delete table', function(){
			return driver
				.elementByName('Delete')
				.click()
				.elementByName('Ok')
				.click()
				;
		});
	});
};

module.exports = testAndroidBasicWork;

