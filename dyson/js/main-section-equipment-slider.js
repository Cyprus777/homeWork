const equipmentSwiper = new Swiper('.equipment-swiper', {
    spaceBetween: 0,
    speed: 400,
    slidesPerView: 1,
    breakpoints: {
        411: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        761: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});

export { equipmentSwiper }