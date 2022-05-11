import Swiper from 'swiper';

let swiper = new Swiper(".header__slider", {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});