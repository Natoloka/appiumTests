const { config } = require('./wdio.conf');

config.port = 4723;

config.specs = [
    './test/specs/ios/ios-native.spec.js'
];

config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "XCUITest",
        "appium:app": "app/ios/MVCTodo.app"
    }
]

exports.config = config;