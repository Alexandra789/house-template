$(".navigation .navigation__item").hover(function () {
    let isHovered = $(this).is(":hover");
    let children = $(this).children('.property-dropdown');
    if (isHovered) {
        children.stop(true, true).delay(200).slideDown(300);
    } else {
        children.stop(true, true).delay(200).slideUp(300);
    }
});
