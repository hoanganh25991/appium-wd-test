//to run webdriver, we HAVE TO pass in options > create session
//hold connect device-webdriver command
/**
 * sample for
 *
 * 1. options
 * 2. session
 */

var options = {
	desiredCapabilities: {
		browserName: 'chrome',
		host: '0.0.0.0',
		port: 4723
	}
};

var options = {
    "capabilities" : [
        {
            "browserName" : "Chrome",
        },
    ],
    "configuration" : {
        "_comment" : "Configuration for Node",
        "cleanUpCycle" : 2000,
        "timeout" : 30000,
        "proxy" : "org.openqa.grid.selenium.proxy.WebDriverRemoteProxy",
        "port" : 4723,
        "host" : 0.0.0.0,
        "register" : true,
        "hubPort" : 4444,
        "maxSessions" : 5
    }
};

var options3 = {
    "capabilities" : [
        {
            "browserName" : "firefox",
            "acceptSslCerts" : true,
            "javascriptEnabled" : true,
            "takesScreenshot" : false,
            "firefox_profile" : "",
            "browser-version" : "42",
            "platform" : "MAC",
            "maxInstances" : 5,
            "firefox_binary" : "",
            "cleanSession" : true
        },
        {
            "browserName" : "chrome",
            "maxInstances" : 5,
            "platform" : "MAC",
            "webdriver.chrome.driver" : "/Applications/Opera.app/Contents/MacOS/Chrome/chrome"
        },
        {
            "browserName" : "safari",
            "maxInstances" : 1,
            "platform" : "MAC",
            "version" : "12",
            "webdriver.safari.driver" : "https://code.google.com/p/selenium/wiki/OperaDriver"
        },
        {
            "browserName" : "opera",
            "maxInstances" : 1,
            "platform" : "MAC",
            "version" : "8",
            "webdriver.opera.driver" : "???"
        }
    ],
    "configuration" : {
        "_comment" : "Configuration for Node",
        "cleanUpCycle" : 2000,
        "timeout" : 30000,
        "proxy" : "org.openqa.grid.selenium.proxy.WebDriverRemoteProxy",
        "port" : 5555,
        "host" : ip,
        "register" : true,
        "hubPort" : 4444,
        "maxSessions" : 5
    }
};

var sessions = {
    sessionId:"",
    status:0,
    value:[
        {
            capabilities:{
                acceptSslCerts:true,
                applicationCacheEnabled:false,
                browserConnectionEnabled:false,
                browserName:"chrome",
                chrome:{

                },
                cssSelectorsEnabled:true,
                databaseEnabled:false,
                handlesAlerts:true,
                hasTouchScreen:false,
                javascriptEnabled:true,
                locationContextEnabled:true,
                mobileEmulationEnabled:false,
                nativeEvents:true,
                platform:"ANDROID",
                rotatable:false,
                takesHeapSnapshot:true,
                takesScreenshot:true,
                version:"30.0.0.0",
                webStorageEnabled:true
            },
            sessionId:"ba460e15499f6317ec1822db03236378"
        }
    ]
}