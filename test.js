var webdriverio = require('webdriverio');
var options = {
    host: '127.0.0.1',
    port: 4723,
    desiredCapabilities: {
        app: 'browser',
        // app: 'latest_dev.apk',
        browserName: 'chrome',
        platformName: 'android',
        deviceName: 'abc'
    }
};
 
var client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle()
    .then(function(title) {
        console.log('Title is: ' + title);

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();