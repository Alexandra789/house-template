let swiperAboutUs = new Swiper(".about-us__slider", {
    initialSlide: 1,
    freeMode: true,
    centeredSlides: true,
    slidesPerView: 2,
    grabCursor: true,
    pagination: {
        el: ".about-us__slider__pagination",
        clickable: true,
    },
});