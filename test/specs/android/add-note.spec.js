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
})