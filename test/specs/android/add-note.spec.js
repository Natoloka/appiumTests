const AddNoteScreen = require("../../screenobjects/android/add-note.screen.js");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await AddNoteScreen.skipBtn.click();
        await expect($(AddNoteScreen.addNoteTxt)).toBeDisplayed();
    });

    it('Add a note, save changes, verify', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        //add note title
        await $('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");
        //add note body
        await $('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");
        //save the changes
        await driver.back();
        await driver.back();
        //assert
        await expect($('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/edit_btn]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/view_note]')).toHaveText("Naruto\nOnePiece\nAOT");
    })

    it('Switch to browser and back', async () => {
        //click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        //click on the facebook link
        await $('//*[@text="Like us on Facebook"]').click()
        //get all contexts
        await driver.getContexts()
        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')
        //assert
        const coverImg = await $('.img.coverPhoto');
        await expect(coverImg).toBeDisplayed();
        //switch back to app
        await driver.switchContext('NATIVE_APP')
        await driver.back()
    })

    
    it('Wait until example', async () => {
        await $('~Webview').click();

        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context' });

    })
})