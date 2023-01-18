const snackbar = new mdc.snackbar.MDCSnackbar($('.mdc-snackbar')[0]);

/**
 * Show the snackbar with the given text, and optionally, a button.
 * @param {string} text The text to show in the snackbar.
 * @param {string} buttonText The text to show on the button. This has no effect if buttonCallback is omitted.
 * @param {string} buttonCallback The callback to call when the button is clicked. This has no effect if buttonText` is omitted.
 */
function showSnackbar(text, buttonText, buttonCallback) {
    if (buttonText && buttonCallback) {
        snackbar.actionButtonText = buttonText;
        snackbar.actionButtonCallback = buttonCallback;
        $(".mdc-snackbar__actions").css("display", "inherit");
    }
    else {
        snackbar.actionButtonText = "";
        snackbar.actionButtonCallback = undefined;
        $(".mdc-snackbar__actions").css("display", "none");

    }

    if (text) {
        snackbar.labelText = text;
        snackbar.open();
    }
}
