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

const swiperContainer = new Swiper(".swiper-container", {
  slidesPerView: 4, // عدد العناصر في العرض الأكبر
  spaceBetween: 20, // المسافة بين العناصر
  navigation: {
    nextEl: ".swiper-button-next", // زر التنقل للأمام
    prevEl: ".swiper-button-prev", // زر التنقل للخلف
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, // عرض 3 منتجات
    },
    768: {
      slidesPerView: 2, // عرض منتجين
    },
    576: {
      slidesPerView: 1, // عرض منتج واحد فقط
    },
  },
});