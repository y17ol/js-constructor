import {
    div, divO, 
    container, rowCol, row, col, 
    form, button, input, select, option,
    ulTab, liTab, aTab,
    aTree,
    icon
} from '../block/tags'

import {
    changeSelectedBlock, 
    fillTreeItem, fillNewsText, fillTextForm,
    setTextStyle, clearBtnAlign
} from './utils'

//
//  variable
//

let counterBlock = 0

export let selectedBlock = 0

let idTree = ''
let idNews = ''

function updateId() {
    idTree = 'item' + counterBlock
    idNews = 'text' + counterBlock
}

let $newsText = ''

//
//  item tree
//

export function moveUpBlock() {

    if (document.getElementById('item' + selectedBlock).previousSibling != null) {

        let $current = document.getElementById('item' + selectedBlock)
        let $currentN = document.getElementById('text' + selectedBlock)

        let $previous = $current.previousSibling
        let $previousN = $currentN.previousSibling

        $previous.parentNode.removeChild($current);
        $previousN.parentNode.removeChild($currentN);

        $previous.parentNode.insertBefore($current, $previous)
        $previousN.parentNode.insertBefore($currentN, $previousN)
    }
}

export function moveDownBlock() {

    if (document.getElementById('item' + selectedBlock).nextSibling != null) {

        let $current = document.getElementById('item' + selectedBlock)
        let $currentN = document.getElementById('text' + selectedBlock)
        
        let $next = $current.nextSibling.nextSibling
        let $nextN = $currentN.nextSibling.nextSibling

        $current.parentNode.removeChild($current);
        $currentN.parentNode.removeChild($currentN);

        if ($next != null) {
            // add current before next
            $next.parentNode.insertBefore($current, $next)
            $nextN.parentNode.insertBefore($currentN, $nextN)
        } else {
            // add current before end
            document.querySelector('.itemTree__tree').appendChild($current)
            document.querySelector('.preview__news').appendChild($currentN)      
        }
    }
}

export function deleteBlock() {

    let $current = document.getElementById('item' + selectedBlock)
    let $currentN = document.getElementById('text' + selectedBlock)

    if ($current.previousSibling != null) {
        selectedBlock = $current.previousSibling.id.slice(4)
        changeSelectedBlock($current.id.slice(4), selectedBlock)
        fillTextForm(selectedBlock)
    }

    $current.parentNode.removeChild($current);
    $currentN.parentNode.removeChild($currentN);
}

export function treeItemClick(event) {

    let oldId = selectedBlock
    selectedBlock = event.target.id.slice(4)
    changeSelectedBlock(oldId, selectedBlock)
    
    fillTextForm(selectedBlock)
}

export function addText() {

    updateId()

    let $item = aTree('list-group-item-light itemTree__tree__item ', idTree, '')
    let $tree = document.querySelector('.itemTree__tree')
    $tree.insertAdjacentHTML('beforeend', $item)
    
    let $text = divO(idNews, idNews, '', '')
    let $preview = document.querySelector('.preview__news')
    $preview.insertAdjacentHTML('beforeend', $text)
    
    fillTreeItem(counterBlock)
    fillNewsText(counterBlock)

    let numberItems = $tree.childNodes.length 

    changeSelectedBlock(
        numberItems > 1 
        ? selectedBlock
        : counterBlock
    , counterBlock
    )

    selectedBlock = counterBlock
    counterBlock += 1
}

//
// text form
//

export function textFormChange() {

    fillTreeItem(selectedBlock)
    fillNewsText(selectedBlock)
}

export function textFormContentClear() {

    document.getElementById('text' + selectedBlock).textContent = ''
    document.getElementById('item' + selectedBlock).textContent = 'Your text'
    document.querySelector('.textForm__content').value = ''
}

export function textFormItalic(event) {

    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.fontStyle = 'normal',
        () => $newsText.style.fontStyle = 'italic')
}

export function textFormStrikethrough(event) {
    
    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textDecoration = 'none',
        () => {
            $newsText.style.textDecoration = 'line-through'
            document.querySelector('.textForm__underline').value = 'false'
        }
    )
}

export function textFormUnderline(event) {
    
    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textDecoration = 'none',
        () => {
            $newsText.style.textDecoration = 'underline'
            document.querySelector('.textForm__strikethrough').value = 'false'
        }
    )
}

export function textFormAlignLeft(event) {

    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textAlign = 'auto',
        () => {
            $newsText.style.textAlign = 'left'
            clearBtnAlign()
        }
    )
}

export function textFormAlignCenter(event) {

    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textAlign = 'auto',
        () => {
            $newsText.style.textAlign = 'center'
            clearBtnAlign()
        }
    )
}

export function textFormAlignRight(event) {

    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textAlign = 'auto',
        () => {
            $newsText.style.textAlign = 'right'
            clearBtnAlign()
        }
    )
}

export function textFormAlignJustify(event) {

    $newsText = document.getElementById('text' + selectedBlock)

    setTextStyle(event.target, 
        () => $newsText.style.textAlign = 'auto',
        () => {
            $newsText.style.textAlign = 'justify'
            clearBtnAlign()
        }
    )
}