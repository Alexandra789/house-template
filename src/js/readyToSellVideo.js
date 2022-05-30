$("#play-video").on("click", function (e) {
    e.preventDefault();
    $(".video-overlay").addClass("open");
    $(".video-wrapper").addClass("open");
    $(".video-overlay").append(
        '<iframe src="https://www.youtube.com/embed/_73A-m8dQS8" poster="./src/images/house-detail/house.png" width="853" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
    );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        close_video();
    }
});

function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
    $(".video-wrapper.open").removeClass("open");
}
