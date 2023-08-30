// var swiper = new Swiper(".slide-intro", {
//   slidesPerView: 1,
//   spaceBetween: 3,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// main-slide
var swiper = new Swiper(".slide-intro", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// footer-bnr slide
