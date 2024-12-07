const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,  // التكرار اللانهائي للمنتجات
  autoplay: {
    delay: 4000,  // التبديل التلقائي كل 3 ثواني
    disableOnInteraction: false,  // استمر في التبديل حتى بعد التفاعل مع الـ Swiper
  },
  breakpoints: {
    640: {
      slidesPerView: 3,  // عرض منتج واحد فقط على الشاشات الصغيرة
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,  // عرض منتجين على الشاشات المتوسطة
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,  // عرض 3 منتجات على الشاشات الكبيرة
      spaceBetween: 20,
    },
  },
});


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper-container-2', {
    slidesPerView: 3, // عدد البطاقات المرئية
    spaceBetween: 20, // المسافة بين البطاقات
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

function flipCard(cardElement) {
  const cardInner = cardElement.querySelector('.card-inner');
  cardInner.classList.toggle('flipped');
}
