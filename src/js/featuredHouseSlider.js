import Swiper from 'swiper';

let swiper = new Swiper(".featured-house__slider", {
    spaceBetween: 40,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".featured-house__slider-navigation-button-next",
        prevEl: ".featured-house__slider-navigation-button-prev",
    },
});