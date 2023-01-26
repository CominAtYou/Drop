$("#submit-button").on("click", async () => {
    const fileValue = $("#file-input").val();
    const urlValue = $("#file-url-input").val();
    const locationValue = $("#location-select").val();
    const filename = $("#file-name-input").val();

    if (fileValue === "") {
        if (urlValue === "") {
            showSnackbar("A file is required.");
            return;
        }

        if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i.test(urlValue) === false) {
            showSnackbar("An invalid URL was provided.");
            return;
        }
    }

    if (locationValue === null || locationValue === "default") {
        showSnackbar("A location must be selected.");
        return;
    }

    if (filename === "") {
        showSnackbar("A file name must be provided.");
        return;
    }

    /* Form data will be sent as follows:
        location: string,
        filename: string,
        file: binary data, or URL: string
    */
    const form = new FormData($("form")[0]);

    if (urlValue) {
        form.delete("file");
    }

    const res = await fetch("http://127.0.0.1/upload", { method: 'POST', body: form });

    if (res.status < 200 || res.status >= 300) {
        try {
            const response = await res.json();
            showSnackbar("Error: " + response.error);
        }
        catch {
            showSnackbar("An error occurred while uploading the file.");
        }
    }
    else {
        showSnackbar("The file was successfully uploaded.");

        setTimeout(() => {
            $("#file-name-input").val("");
            $("#file-input").val("");
            $('#upload-button-text').text("Choose file");
            $("#location-select").val("default");
            $("#file-url-input").val("");
            $("#file-url-input").attr("disabled", false);
        }, 3500);
    }
});
