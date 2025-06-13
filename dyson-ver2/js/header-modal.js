const body = document.querySelector('body')
const arrayTextContentForModalListLink = ['Dyson Supersonic', 'Dyson Airwrap', 'Доставка и оплата', 'Сервис', 'Сертификаты', 'Контакты']

function render() {

    if (document.querySelector('.header-modal')) {
        body.removeChild(document.querySelector('.header-modal'))
    }

    const modal = document.createElement('div')
    modal.setAttribute('class', 'header-modal')

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('class', 'header-modal__window')

    const modalWindowButtonClose = document.createElement('div')
    modalWindowButtonClose.setAttribute('class', 'header-modal__window-button header-modal__window-button--close')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')

    const modalList = document.createElement('ul')
    modalList.setAttribute('class', 'header-modal__list')

    const modalListItem = document.createElement('li')
    modalListItem.setAttribute('class', 'header-modal__item')

    const modalListLink = document.createElement('a')
    modalListLink.setAttribute('class', 'header-modal__link')
    modalListLink.setAttribute('href', '#')

    modal.append(modalWindow)
    modalWindow.append(modalWindowButtonClose)
    modalWindow.append(modalList)
    modalListItem.append(modalListLink)

    for (let i = 0; i < arrayTextContentForModalListLink.length; i++) {
        const modalListItemCloneNode = modalListItem.cloneNode(true)
        modalListItemCloneNode.textContent = `${arrayTextContentForModalListLink[i]}`
        modalList.append(modalListItemCloneNode)
    }

    document.querySelector('.footer').insertAdjacentElement('afterend', modal)

    document.querySelector('.header-modal').style.maxHeight = document.querySelector('body').scrollHeight + 'px'
}

function burgerMenuOpen(e) {
    e.preventDefault()

    const target = e.target
    if (target.closest('.header__burger') && window.innerWidth <= 760) {
        render()
        document.querySelector('.header-modal__list').style.maxHeight = document.querySelector('body').scrollHeight + 'px'
        document.body.classList.add('body--fixed')
    }
}

function closeBurgerMenu(e) {
    e.preventDefault()

    const target = e.target
    if (target.closest('.header-modal__window-button') && target.closest('.header-modal__window-button--close')) {
        console.log(target.parentNode)
        target.closest('.header-modal__window-button').classList.remove('header-modal__window-button--close')
        document.querySelector('.header-modal__list').style.maxHeight = 0
        document.querySelector('.header-modal').style.maxHeight = 0
        document.body.classList.remove('body--fixed')
    }
}


function modalListOpen(e) {
    e.preventDefault()

    const target = e.target
    if (target.closest('.header-modal__list') && window.innerWidth <= 760) {
        render()
    }

}

body.addEventListener('click', burgerMenuOpen)
body.addEventListener('click', closeBurgerMenu)