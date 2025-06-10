import { accordionHeader } from './header-accordion.js'
import { accordionMainSpecialOffers } from './main-section-spec-offers-accordion.js'
import { accordionMainFaq } from './main-section-faq-accordion.js'
import { swiper, swiperPaginationCurrent, changeNextSiblingNode, swiperWrapper } from './main-section-spec-offers-slider.js'
import { productQuantityCounter, addToCartWindowWidthMore760, addToCartWindowWidthLess760 } from './main-section-spec-offers.js'
import { equipmentSwiper } from './main-section-equipment-slider.js'
import { enableLastChildSvg760px } from './main-section-howToMakeCurls.js'

enableLastChildSvg760px()

function interactiveElements(e) {
    accordionHeader(e)
    accordionMainSpecialOffers(e)
    accordionMainFaq(e)
    productQuantityCounter(e)
    addToCartWindowWidthMore760(e)
    addToCartWindowWidthLess760(e)
}
const body = document.body
body.addEventListener('click', interactiveElements)




