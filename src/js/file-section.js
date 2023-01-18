$("#upload-button").on('click', () => $('#file-input').trigger("click"));

$("#file-input").on("change", event => {
    if (event.target.files.length === 0) {
        $('#upload-button-text').text("Choose file");
        $('#file-name-input').val("");
        return;
    }

    $('#upload-button-text').text(event.target.files[0].name);
    $('#file-name-input').val(event.target.files[0].name);
    $("#file-url-input").attr("disabled", true);
});

$('#file-url-input').on("change", event => {
    $('#upload-button').attr("disabled", event.target.value != "");
});
