'use strict';

var wd = require('wd'),
	actions = require('./helpers/actions'),
	serverConfigs = require('./helpers/appium-servers'),
	asserters = wd.asserters,
	colors = require('colors'),
	chai = require("chai"),
	chaiAsPromised = require("chai-as-promised"),
	should = chai.should();

chai.use(chaiAsPromised);

chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.addPromiseChainMethod('swipe', actions.swipe);

wd.addPromiseChainMethod('dummyAction', actions.dummyAction);

describe('test on pos.hoicard', function(){
	this.timeout(300000);

	var driver;

	var allPassed = true;

	before(function(){
		var serverConfig = serverConfigs.local;

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

		var desired = {
			platformName: 'android',
			deviceName: 'cutepad TX_A7133_1508_',
			app: 'D:/work-station/appium-wd-test/apk-file/latest_staging.apk'
		};

		return driver.init(desired);
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
			.waitForElement(
				'id',
				'us.originally.hoicard.debug:id/txt_loading_status',
				5000
			)
			.text().should.become(' Retrieving outlet data...')
			;
	});

	it('')
});