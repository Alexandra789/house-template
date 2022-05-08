import Swiper from 'swiper';

let swiper = new Swiper(".swiper", {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});