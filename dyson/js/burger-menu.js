const body = document.querySelector('body')


    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal modal--open')

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('class', 'modal__window')

    const modalWindowButtonClose = document.createElement('div')
    modalWindowButtonClose.setAttribute('class', 'modal__window-button modal__window-button--close')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')

    const modalList = document.createElement('ul')
    modalList.setAttribute('class', 'modal__list')

    const modalListItem = document.createElement('li')
    modalListItem.setAttribute('class', 'modal__item')

    const modalListLink = document.createElement('a')
    modalListLink.setAttribute('class', 'modal__link')
    modalListLink.setAttribute('href', '#')

    modal.append(modalWindow)
    modalWindow.append(modalWindowButtonClose)
    modalWindow.append(modalList)
    modalList.append(modalListItem)
    modalListItem.append(modalListLink)

    const arrayTextContentForModalListLink = ['Dyson Supersonic', 'Dyson Airwrap', 'Доставка и оплата', 'Сервис', 'Сертификаты', 'Контакты']
    for (let i = 0; i < arrayTextContentForModalListLink.length; i++) {
        const modalListItemCloneNode = modalListItem.cloneNode(true)
        modalListItemCloneNode.textContent = `${arrayTextContentForModalListLink[i]}`
        modalList.append(modalListItemCloneNode)
    }




function burgerMenuOpen(e) {
    e.preventDefault()

    const target = e.target
    if (target.parentNode.classList.contains('header__burger') && window.innerWidth <= 760) {
        document.querySelector('.footer').insertAdjacentElement('afterend', modal)
        document.querySelector('.modal').style.maxHeight = document.querySelector('.modal').scrollHeight + 'px'
    }
}

function closeBurgerMenu(e) {
    e.preventDefault()

    const target = e.target
    console.log(target.parentNode)
    if (target.parentNode.classList.contains('modal__window-button') && target.parentNode.classList.contains('modal__window-button--close')) {
        target.parentNode.classList.remove('modal__window-button--close')
        document.querySelector('.modal').style.maxHeight = 0
        document.querySelector('.modal').closest('.modal--open')
    }
}

body.addEventListener('click', burgerMenuOpen)
body.addEventListener('click', closeBurgerMenu)



