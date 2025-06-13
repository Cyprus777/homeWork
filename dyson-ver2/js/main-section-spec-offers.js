const countCardsArticle = document.querySelectorAll('.card-article').length
const specialOffersTitleSpanText = document.querySelector('.special-offers__title>span')
specialOffersTitleSpanText.textContent = countCardsArticle
const headerNumberOfProducts = document.querySelector('.number-of-products')

function productQuantityCounter(e) {
    e.preventDefault()
    const target = e.target

    if (!target.closest('.count')) return

    if (target.closest('.count__plus') && target.closest('.count')) {
        + target.closest('.count__plus').previousElementSibling.textContent++
        target.closest('.count').firstElementChild.classList.add('count__plus--black-color')
        target.closest('.count').firstElementChild.style.cursor = 'pointer'
        return
    }

    if (+target.closest('.count__minus').nextElementSibling.textContent > 0 && target.closest('.count')) {
        + target.closest('.count__minus').nextElementSibling.textContent--
    }

    if (+target.closest('.count__minus').nextElementSibling.textContent === 0 && target.closest('.count')) {
        target.closest('.count__minus').classList.remove('count__plus--black-color')
        target.closest('.count__minus').style.cursor = 'auto'
    }
}

function addToCartWindowWidthMore760(e) {
    e.preventDefault()
    const target = e.target
    if (!target.closest('.into-a-basket') || window.innerWidth <= 760) return

    if (target.closest('.into-a-basket') && +headerNumberOfProducts.textContent + (+target.closest('.add-to-cart').querySelector('.quantity').textContent) <= 9 && window.innerWidth > 760) {
        headerNumberOfProducts.textContent = +headerNumberOfProducts.textContent + (+target.closest('.add-to-cart').querySelector('.quantity').textContent)
        headerNumberOfProducts.style.display = 'flex'
    } else {
        headerNumberOfProducts.textContent = '9+'
           headerNumberOfProducts.style.display = 'flex'
    }
}

function addToCartWindowWidthLess760(e) {
    e.preventDefault()
    const target = e.target
    if (!target.closest('.into-a-basket') || window.innerWidth > 760) return

    if (target.closest('.into-a-basket') && +headerNumberOfProducts.textContent < 9 && window.innerWidth <= 760) {
        console.log(+headerNumberOfProducts.textContent)
        headerNumberOfProducts.textContent = +headerNumberOfProducts.textContent + 1
        headerNumberOfProducts.style.display = 'flex'
    } else {
        headerNumberOfProducts.textContent = '9+'
    }
}

export { productQuantityCounter, addToCartWindowWidthMore760, addToCartWindowWidthLess760 }