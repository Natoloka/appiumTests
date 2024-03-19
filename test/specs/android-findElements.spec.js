describe('Android Elements Tests', () => {
    it('Find element by id', async () => {
        // await driver.pause(5000);
        //find element by id App.
        const appOption = await $('~App');
        //click
        await appOption.click();
        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    // it.only('Find element by class name', async () => {
    it('Find element by class name', async () => {
        const className = await $('android.widget.TextView');
        await expect(className).toHaveText("API Demos");
    });

    it('Find element by xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find by class assertion text present
        const textToCheck = await $('//android.widget.TextView');
        await expect(textToCheck).toHaveText("You selected: 1, Command two");
    });

    it('Find element by UIAutomator', async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []
        // find multiple elements
        const textList = await $$('android.vidget.TextView');
        // loop through them
        for (const element of textList) {
            altualList.push(await element.getText());
        }
        //assert the list
        await expect(actualList).toEqual(expectedList);
    });

    it('Working with text input', async () => {
        //access the autocomplete screen
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();;
        //enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');
        
        //verify the country name
        await expect(textField).toHaveText('Canada');
    });

});