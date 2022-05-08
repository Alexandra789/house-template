import Swiper from 'swiper';

console.log('================================');

let swiper = new Swiper(".swiper", {
    // slidesPerView: 3,
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});