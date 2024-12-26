const swiperCategoty = new Swiper(".swiper-categoty", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1264: {
      slidesPerView: 7, // عرض 3 منتجات
    },
    1024: {
      slidesPerView: 6, // عرض 3 منتجات
    },
    768: {
      slidesPerView: 5, // عرض منتجين
    },
    624: {
      spaceBetween: 15,
      slidesPerView: 4, // عرض منتج واحد فقط
    },
  },
});

const swiperAbout = new Swiper(".swiper-about", {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1050: {
      slidesPerView: 5, // عرض 3 منتجات
    },
    850: {
      slidesPerView: 4, // عرض منتجين
    },
    600: {
      slidesPerView: 3, // عرض منتج واحد فقط
    },
  },
});


document.addEventListener('DOMContentLoaded', () => {
  // تهيئة الشريط الرئيسي (الصور الكبيرة)
  const mainSwiper = new Swiper('.main-swiper', {
    effect: 'slide',
    spaceBetween: 1,
  });

  // تهيئة شريط الصور المصغرة
  const thumbnailSwiper = new Swiper('.thumbnail-swiper', {
    spaceBetween: 10,
    slidesPerView: 3, // عدد الصور المصغّرة المعروضة
    centeredSlides: true,
    slideToClickedSlide: true, // التبديل عند النقر على الصورة المصغرة
  });

  // ربط الشريطين معًا
  mainSwiper.controller.control = thumbnailSwiper;
  thumbnailSwiper.controller.control = mainSwiper;
});

