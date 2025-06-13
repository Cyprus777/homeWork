const body = document.querySelector('body')

const arrayTextContentForModalListLink = ['dyson стайлер для длинных волос', 'dyson стайлер красный', 'dyson hs01 airwrap compliete', 'фен щетка дайсон', 'dyson для айтишниц', 'dyson для тех кто выполнил дипломку', 'dyson на днюху', 'dyson на новый год', 'dyson со скидкой']
const filterByNameFlex = document.querySelector('.filter-by-name__flex')

function render() {
    
    if (document.querySelector('.spec-offers-modal')) {
        body.removeChild(document.querySelector('.spec-offers-modal'))
    }
    
    const arrayTextContentForModalListLinkDefault = new Array
    
    Array.of(document.querySelectorAll('.filter-by-name__flex>button').forEach(btn => arrayTextContentForModalListLinkDefault.push(btn.innerText))
    )
    
    const modal = document.createElement('div')
    modal.setAttribute('class', 'spec-offers-modal')

    const modalWindow = document.createElement('div')
    modalWindow.setAttribute('class', 'spec-offers-modal__window')

    const modalWindowButtonClose = document.createElement('div')
    modalWindowButtonClose.setAttribute('class', 'spec-offers-modal__window-button spec-offers-modal__window-button--close')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')
    modalWindowButtonClose.insertAdjacentHTML('beforeend', '<div></div>')

    const modalList = document.createElement('ul')
    modalList.setAttribute('class', 'spec-offers-modal__list')

    const modalListItem = document.createElement('li')
    modalListItem.setAttribute('class', 'spec-offers-modal__item')

    const modalListLink = document.createElement('a')
    modalListLink.setAttribute('class', 'spec-offers-modal__link')
    modalListLink.setAttribute('href', '#')

    const modalListCheck = document.createElement('div')
    modalListCheck.setAttribute('class', 'spec-offers-modal__check')

    const modalListCheckInner = document.createElement('div')
    modalListCheckInner.setAttribute('class', 'spec-offers-modal__check-inner')

    modal.append(modalWindow)
    modalWindow.append(modalWindowButtonClose)
    modalWindow.append(modalList)
    modalListCheck.append(modalListCheckInner)
    modalListItem.append(modalListCheck)
    modalListItem.append(modalListLink)

    for (let i = 0; i < arrayTextContentForModalListLink.length; i++) {
        const modalListItemCloneNode = modalListItem.cloneNode(true)
        modalListItemCloneNode.lastChild.textContent = `${arrayTextContentForModalListLink[i]}`
        arrayTextContentForModalListLinkDefault.forEach(txt => {
            if (txt === arrayTextContentForModalListLink[i]) {
                modalListItemCloneNode.firstChild.setAttribute('class', 'spec-offers-modal__check spec-offers-modal__check--active')
            }
        })
        modalList.append(modalListItemCloneNode)
    }

    document.querySelector('.footer').insertAdjacentElement('afterend', modal)

    document.querySelector('.spec-offers-modal').style.maxHeight = document.querySelector('body').scrollHeight + 'px'
}


function specOffersMenuOpen(e) {
    e.preventDefault()
    const target = e.target
    if (target.closest('.filter-by-name__flex a')) {
        render()
        document.querySelector('.spec-offers-modal__list').style.maxHeight = '300px'
           document.body.classList.add('body--fixed')
    }
}

function closeSpecOffersMenu(e) {
    e.preventDefault()
    const target = e.target
    if (target.closest('.spec-offers-modal__window-button') && target.closest('.spec-offers-modal__window-button--close')) {
        target.closest('.spec-offers-modal__window-button').classList.remove('spec-offers-modal__window-button--close')
        document.querySelector('.spec-offers-modal__list').style.maxHeight = 0
        document.querySelector('.spec-offers-modal').style.maxHeight = 0
           document.body.classList.remove('body--fixed')
    }
}

function specOffersModalListOpen(e) {
    e.preventDefault()
    const target = e.target
    if (target.closest('.spec-offers-modal__list')) {
        render()
    }

}

function addingButtonInList() {
    const item = document.createElement('button')
    return item
}

function checkingForRepeatedClicks(e) {
    e.preventDefault()
    const target = e.target
    if (target.closest('.spec-offers-modal__item')) {
        for (const btn of document.querySelectorAll('.filter-by-name__flex>button')) {
            if (btn.innerText !== target.closest('.spec-offers-modal__item').lastChild.innerText) {
                continue
            }
            if (btn.innerText === target.closest('.spec-offers-modal__item').lastChild.innerText) {
                return true
            }
        }
    }
}

function specOffersFilterList(e) {
    e.preventDefault()
    const target = e.target

    if (checkingForRepeatedClicks(e) === true) {
        target.closest('.spec-offers-modal__item').firstChild.classList.remove('spec-offers-modal__check--active')


        for (const btn of document.querySelectorAll('.filter-by-name__flex>button')) {
            if (btn.innerText === target.closest('.spec-offers-modal__item').lastChild.innerText) {
                btn.remove()
            }

        }

        return
    }

    if (target.closest('.spec-offers-modal__item')) {
        target.closest('.spec-offers-modal__item').firstChild.classList.add('spec-offers-modal__check--active')
        const button = addingButtonInList()
        button.innerText = target.closest('.spec-offers-modal__item').lastChild.innerText
        filterByNameFlex.prepend(button)
    }
}

body.addEventListener('click', specOffersMenuOpen)
body.addEventListener('click', closeSpecOffersMenu)
body.addEventListener('click', specOffersFilterList)