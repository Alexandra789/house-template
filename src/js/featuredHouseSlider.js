let swiper = new Swiper(".featured-house__slider", {
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".featured-house__slider-navigation-button-next",
        prevEl: ".featured-house__slider-navigation-button-prev",
    },
});

$(".featured-house__filters .featured-house__filters__item").on("click", (e) => {
    sort(e.target, true)
});
$(".footer-navigation .footer-navigation__link").on("click", (e) => {
    sort(e.target.innerText, false)
});

function sort(tabName, flag) {
    let filter;
    if (flag) {
        if (!tabName.innerText && tabName.tagName === 'path') {
            let el = tabName.parentNode.parentNode;
            filter = el.innerText;
        } else if (!tabName.innerText && tabName.tagName === 'svg') {
            let el = tabName.parentNode;
            filter = el.innerText;
        } else {
            filter = tabName.innerText;
        }
    } else {
        filter = tabName;
    }
    let slidesxcol;
    if (filter === "House") {
        $("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
        if ($(".swiper-slide").length > 6)
            slidesxcol = 3;
        else slidesxcol = 1;
        if ($(".featured-house__slider .swiper-slide").length < 4) {
            $(".featured-house__slider-navigation-button-prev").css('display', 'none');
            $(".featured-house__slider-navigation-button-next").css('display', 'none');
        } else {
            $(".featured-house__slider-navigation-button-prev").css('display', 'block');
            $(".featured-house__slider-navigation-button-next").css('display', 'block');
        }
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
        $(".featured-house__slider .swiper-slide").not("[data-filter='" + filter + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
        $("[data-filter='" + filter + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
        if ($(".featured-house__slider .swiper-slide").length > 6) {
            slidesxcol = 3;
        } else if
        ($(".featured-house__slider .swiper-slide").length < 4) {
            $(".featured-house__slider-navigation-button-prev").css('display', 'none');
            $(".featured-house__slider-navigation-button-next").css('display', 'none');
        } else {
            slidesxcol = 1;
            $(".featured-house__slider-navigation-button-prev").css('display', 'block');
            $(".featured-house__slider-navigation-button-next").css('display', 'block');
        }
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
}