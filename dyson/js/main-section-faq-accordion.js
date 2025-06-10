import { listOfConstants, accordionOpenContent } from './universal_accordion.js'

const parentNodeAccordionClassName = listOfConstants.parentNodeAccordionClassName('faq__item')
const accordionTabControlClassName = listOfConstants.accordionTabControlClassName(parentNodeAccordionClassName)

export function accordionMainFaq(e) {
    e.preventDefault()

    accordionOpenContent(e, accordionTabControlClassName, parentNodeAccordionClassName)
}
