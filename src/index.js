import {
    treeItemClick, addText,
    moveUpBlock, moveDownBlock, deleteBlock,

    textFormChange, textFormContentClear,
    textFormItalic, textFormStrikethrough, textFormUnderline,
    textFormAlignLeft, textFormAlignCenter, textFormAlignRight, textFormAlignJustify
} from './scripts/events'

import {content} from './block/general'
import './styles/main.css'

// main

document.querySelector('#app').insertAdjacentHTML('beforeend', content())

// item tree

document.querySelector('.itemTree__tree').onclick = (event) => treeItemClick(event)
document.querySelector('.add__text').onclick = () => addText()

document.querySelector('.itemTree__change__up').onclick = () => moveUpBlock()
document.querySelector('.itemTree__change__down').onclick = () => moveDownBlock()
document.querySelector('.itemTree__change__delete').onclick = () => deleteBlock()

// text form

document.querySelector('.textForm').onchange = () => textFormChange()
document.querySelector('.textForm__btnClear').onclick = () => textFormContentClear()

document.querySelector('.textForm__italic').onclick = (event) => textFormItalic(event)
document.querySelector('.textForm__strikethrough').onclick = (event) => textFormStrikethrough(event)
document.querySelector('.textForm__underline').onclick = (event) => textFormUnderline(event)

document.querySelector('.textForm__alignLeft').onclick = (event) => textFormAlignLeft(event)
document.querySelector('.textForm__alignCenter').onclick = (event) => textFormAlignCenter(event)
document.querySelector('.textForm__alignRight').onclick = (event) => textFormAlignRight(event)
document.querySelector('.textForm__alignJustify').onclick = (event) => textFormAlignJustify(event)

//
// add image [event]
//

document.querySelector('.add__image').onclick = (event) => {
    event.preventDefault()
    console.log('addImage')
}