require('dotenv').config();
const { config } = require('./wdio.conf');

//Browserstack credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/android/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '10.0',
        // to show correct device name go to: 
        // https://www.browserstack.com/app-automate/capabilities
        'appium:deviceName': 'Google Pixel 4',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
        "appium:autoGrantPermissions": true
    }
]

config.services = ['browserstack'];

exports.config = config;