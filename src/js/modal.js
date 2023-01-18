$("#avatar-img").on("click", () => {
    $("#modal-container").css("display", "flex");
    $("#popup-modal").css("display", "inherit");
});

$("#modal-close").on("click", () => {
    $("#popup-modal").css("display", "");
    $("#modal-container").css("display", "");
});

$("#logout-button").on("click", () => {
    window.location.href = `https://auth.cominatyou.com/logout?returnto=uploader`;
});
