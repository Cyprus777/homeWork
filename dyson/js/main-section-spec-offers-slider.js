// ===========================================================================
const swiper = new Swiper('.product-cards-swiper', {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerGroup: 2,

    grid: {
        rows: 2,
        fill: 'row',
    },

    breakpoints: {
        411: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
        }
    },

    speed: 800,
    pagination: {
        type: 'fraction',
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.sw-button-next',
        prevEl: '.sw-button-prev',
    },
});

const swiperPaginationCurrent = document.querySelector('.swiper-pagination-current')
const changeNextSiblingNode = swiperPaginationCurrent.nextSibling
const swiperWrapper = document.querySelector('.special-offers__inner .swiper-wrapper')

changeNextSiblingNode.textContent = 'из'
swiperWrapper.style.gap = '0'

export { swiper, swiperPaginationCurrent, changeNextSiblingNode, swiperWrapper }