const swiperCategoty = new Swiper(".swiper-categoty", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 5, // عرض 3 منتجات
    },
    768: {
      slidesPerView: 4, // عرض منتجين
    },
    576: {
      slidesPerView: 3, // عرض منتج واحد فقط
    },
  },
});


const swiperAbout = new Swiper('.swiper-about', {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5, // عرض 3 منتجات
    },
    768: {
      slidesPerView: 4, // عرض منتجين
    },
    576: {
      slidesPerView: 3, // عرض منتج واحد فقط
    },
  },
});