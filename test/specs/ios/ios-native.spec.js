it.only('scroll elements', async () => {
    //simple
    await DriverCliCommand.execute('mobile:scroll', { direction: "down" });
    await DriverCliCommand.execute('mobile:scroll', { direction: "up" });

    await $('~Picker View').click();
    await driver.execute('mobile:scroll', { element: redPicker.elementId, direction: "down" });
    await driver.execute('mobile:scroll', { element: bluePicker.elementId, direction: "up" });
    await driver.pause(2000);
})