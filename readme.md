To use platform when you run tests show it's conf.js file like below:
npx wdio config/wdio.android.conf.js
npx wdio config/wdio.ios.conf.js

https://webdriver.io/docs/browserstack-service
npm install @wdio/browserstack-service --save-dev
npx wdio config/wdio.android.bs.conf.js

appium -p 4724 --allow-cors
netstat -ano|findstr "PID :4724"
taskkill /pid 7040 /f

to show correct device name go to: https://www.browserstack.com/app-automate/capabilities

Setup env variables:
npm install dotenv

Allure
https://webdriver.io/docs/allure-reporter/
npm i allure-commandline --save-dev
npx allure generate allure-results
npx allure open
https://webdriver.io/docs/allure-reporter/#command-line
