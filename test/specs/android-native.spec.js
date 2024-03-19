describe('Android Native Feature Tests', () => {
    it('Access an activity directly', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appiu,.android.apis.app.AlertDialogSamples");
        await driver.pause(3000);
        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appiu,.android.apis.app.AlertDialogSamples");
        //click on first dialog
        await $('//*[resource-id="io.appium.android.apis:id/two_buttons"]').click();
        //accept Alert
        // await driver.acceptAlert();
        //dismiss Alert
        // await driver.dismissAlert();
        //assert alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        // await $('~Secure Surfaces').click();

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1",
        );

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);
    });
});