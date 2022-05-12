let swiper = new Swiper(".featured-house__slider", {
    spaceBetween: 40,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".featured-house__slider-navigation-button-next",
        prevEl: ".featured-house__slider-navigation-button-prev",
    },
});

$(".featured-house__filters .featured-house__filters__item").on("click", function () {
    let filter = $(this).html().split('svg')[3].replace(/\s/g, '').slice(1);
    let slidesxcol;
    if (filter === "House") {
        $("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
        if ($(".swiper-slide").length > 6)
            slidesxcol = 3;
        else slidesxcol = 1;
        swiper.destroy();
        swiper = new Swiper(".featured-house__slider", {
            spaceBetween: 40,
            slidesPerView: "auto",
            slidesPerColumn: slidesxcol,
            navigation: {
                nextEl: ".featured-house__slider-navigation-button-next",
                prevEl: ".featured-house__slider-navigation-button-prev",
            },
        });
    } else {
        $(".swiper-slide").not("[data-filter='" + filter + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
        $("[data-filter='" + filter + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
        if ($(".swiper-slide").length > 6)
            slidesxcol = 3;
        else slidesxcol = 1;
        swiper.destroy();
        swiper = new Swiper(".featured-house__slider", {
            spaceBetween: 40,
            slidesPerView: "auto",
            slidesPerColumn: slidesxcol,
            navigation: {
                nextEl: ".featured-house__slider-navigation-button-next",
                prevEl: ".featured-house__slider-navigation-button-prev",
            },
        });
    }
})