class AddNoteScreen{
    get skipBtn() {
        return $('//*[@resource-id="com.socialmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt() {
        return $('//*[@text="Add note"]')
    }
}

module.exports = new AddNoteScreen();