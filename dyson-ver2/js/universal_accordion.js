const listOfConstants = {
    parentNodeAccordionClassName: function (parentNodeClassName) {
        return document.querySelector(`.${parentNodeClassName}`).className
    },
    parentsNodesAccordionList: function (parentNodeAccordionClassName) {
        return document.querySelectorAll(`.${parentNodeAccordionClassName}`)
    },
    accordionTabControlClassName: function (parentNodeAccordionClassName) {
        return document.querySelector(`.${parentNodeAccordionClassName} .accordion__tab-control`).className
    },
    accordionTabControl: function (parentNodeAccordionClassName) {
        return document.querySelector(`.${parentNodeAccordionClassName} .accordion__tab-control`)
    }
}

// const parentNodeAccordionClassName = listOfConstants.parentNodeAccordionClassName('faq__item')
// const parentsNodesAccordionList = listOfConstants.parentsNodesAccordionList(parentNodeAccordionClassName)
// const accordionTabControlClassName = listOfConstants.accordionTabControlClassName(parentNodeAccordionClassName)
// const accordionTabControl = listOfConstants.accordionTabControl(parentNodeAccordionClassName)

function accordionCloseContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList = []) {
    const target = e.target

    if (target.closest('.accordion__tab-control--open') && target.closest(`.${accordionTabControlClassName}`) && target.closest(`.${parentNodeAccordionClassName}`)) {

        target.closest(`.${accordionTabControlClassName}`).classList.remove('accordion__tab-control--open')
        target.closest(`.${accordionTabControlClassName}`).nextElementSibling.style.maxHeight = 0
        return
    }

    //--------Дополнительный функционал-------------------------------------------------------------
    if (!parentsNodesAccordionList) return

    parentsNodesAccordionList.forEach(node => {

        if (node.querySelector(`.${accordionTabControlClassName}`) === null) return

        if (node.querySelector(`.${accordionTabControlClassName}`).classList.contains('accordion__tab-control--open')) {
            node.querySelector(`.${accordionTabControlClassName}`).classList.remove('accordion__tab-control--open')
            node.querySelector(`.${accordionTabControlClassName}`).nextElementSibling.style.maxHeight = 0
        }
    })
}

function accordionOpenContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList) {

    const target = e.target

    if (!target.closest('.accordion__tab-control--open') && target.closest(`.${accordionTabControlClassName}`) && target.closest(`.${parentNodeAccordionClassName}`)) {
        target.closest(`.${accordionTabControlClassName}`).classList.add('accordion__tab-control--open')

        target.closest(`.${accordionTabControlClassName}`).nextElementSibling.style.maxHeight = target.closest(`.${accordionTabControlClassName}`).nextElementSibling.scrollHeight + 'px'

        return
    }

    accordionCloseContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList)
}

//--------Дополнительный функционал---------------------------------------------------------------
function accordionContentSelection(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList, accordionTabControl) {

    const target = e.target

    if (target.closest(`.${accordionTabControlClassName}`)) return

    if (target.closest('.accordion__content-item') && target.closest('.accordion__content') && target.closest(`.${parentNodeAccordionClassName}`)) {

        accordionTabControl.replaceChild(target.closest('.accordion__content-item').firstElementChild.cloneNode(true), accordionTabControl.firstElementChild)

        accordionCloseContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList)
    }
    else {
        accordionCloseContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList)
    }

}
//-------------------------------------------------------------------------------------------------

// function accordion(e) {
//     e.preventDefault()

//     accordionOpenContent(e)
//     accordionContentSelection(e)
// }

export { listOfConstants, accordionCloseContent, accordionOpenContent, accordionContentSelection }