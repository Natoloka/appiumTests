const { config } = require('./wdio.conf');

config.port = 4724;

config.specs = [
    './test/specs/android/*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel 4',
        'appium:automationName': 'UIAutomator2',
        // 'app': path.join(process.cwd(), 'app\\android\\ApiDemos-debug.apk'),
        // 'appium:app': 'app/android/ApiDemos-debug.apk'//,
        'appium:app': 'app/android/ColorNote Notepad.apk',
        // 'browserName': 'chromium'
        "appium:autoGrantPermissions": true // grants permission to open apk file
    }
]

exports.config = config;