import {
    treeItemClick, addText,
    moveUpBlock, moveDownBlock, deleteBlock,
    textFormChange, textFormContentClear, changeText, clickText
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
document.querySelector('.textForm__content').onkeyup = (event) => changeText(event)
document.querySelector('.textForm__content').onclick = (event) => clickText(event)










// document.onmouseover = (event) => {

//     if (event.target.classList.value === 'border') {

//         //setTimeout(() => event.target.style.backgroundColor = 'red', 200)
//         event.target.style.backgroundColor = 'SlateGrey'
        
        
//     } else if (event.target.parentNode.classList.value === 'border') {

//         //setTimeout(() => event.target.parentNode.style.backgroundColor = 'red', 400)
//         event.target.parentNode.style.backgroundColor = 'SlateGrey'
        
//     }   
// }

// document.onmouseout = (event) => {
    
//     if (event.target.classList.value === 'border') {

//         event.target.style.backgroundColor = 'transparent'
        
//     } else if (event.target.parentNode.classList.value === 'border') {

//         event.target.parentNode.style.backgroundColor = 'transparent'
//     }
// }









//
// add image [event]
//

document.querySelector('.add__image').onclick = (event) => {
    event.preventDefault()
    console.log('addImage')
}




