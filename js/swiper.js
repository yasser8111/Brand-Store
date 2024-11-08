/* إعداد Swiper للعرض الجانبي */

new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});

new Swiper('.sale_sec', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
});
