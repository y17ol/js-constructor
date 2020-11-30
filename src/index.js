import {
    treeItemClick, addText,
    moveUpBlock, moveDownBlock, deleteBlock,
    textFormChange, textFormContentClear
} from './scripts/events'

import {content} from './block/general'
import './styles/main.css'

document.querySelector('#app').insertAdjacentHTML('beforeend', content())

document.querySelector('.itemTree__tree').onclick = (event) => treeItemClick(event)
document.querySelector('.add__text').onclick = (event) => addText(event)

document.querySelector('.itemTree__change__up').onclick = (event) => moveUpBlock(event)
document.querySelector('.itemTree__change__down').onclick = (event) => moveDownBlock(event)
document.querySelector('.itemTree__change__delete').onclick = (event) => deleteBlock(event)

document.querySelector('.textForm').onchange = (event) => textFormChange(event)
document.querySelector('.textForm__btnClear').onclick = (event) => textFormContentClear(event)



//
// add image [event]
//

document.querySelector('.add__image').onclick = (event) => {
    event.preventDefault()
    console.log('addImage')
}