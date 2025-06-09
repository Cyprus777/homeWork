import { listOfConstants, accordionOpenContent, accordionContentSelection  } from './universal_accordion.js'

const parentNodeAccordionClassName = listOfConstants.parentNodeAccordionClassName('header__action')
const parentsNodesAccordionList = listOfConstants.parentsNodesAccordionList(parentNodeAccordionClassName)
const accordionTabControlClassName = listOfConstants.accordionTabControlClassName(parentNodeAccordionClassName)
const accordionTabControl = listOfConstants.accordionTabControl(parentNodeAccordionClassName)

export function accordionHeader(e) {
    e.preventDefault()
    accordionOpenContent(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList)
    accordionContentSelection(e, accordionTabControlClassName, parentNodeAccordionClassName, parentsNodesAccordionList, accordionTabControl)
}





