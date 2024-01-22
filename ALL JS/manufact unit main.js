var swiper = new Swiper(".slide-content-vid-above-slider", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination-vid-above-slider",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-vid-above-slider",
    prevEl: ".swiper-button-prev-vid-above-slider",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});
