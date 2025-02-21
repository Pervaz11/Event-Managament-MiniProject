var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,  
        },
        360: {
            slidesPerView: 1,
        }
    }
});
