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
    getCursorPosition
} from './utils'

//
//  variable
//

let counterBlock = 0

let selectedBlock = 0

let idTree = ''
let idNews = ''

function updateId() {
    idTree = 'item' + counterBlock
    idNews = 'text' + counterBlock
}

//
//  item tree
//

export function moveUpBlock(event) {

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

export function moveDownBlock(event) {

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

export function deleteBlock(event) {

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

export function addText(event) {

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

export function textFormChange(event) {

    fillTreeItem(selectedBlock)
    fillNewsText(selectedBlock)
}

export function textFormContentClear(event) {

    document.getElementById('text' + selectedBlock).textContent = ''
    document.getElementById('item' + selectedBlock).textContent = 'Your text'
    document.querySelector('.textForm__content').textContent = ''
}

let cursorPosition = 9

export function changeText(event) {

    let $news = document.getElementById('text' + selectedBlock)
    let $text = document.querySelector('.textForm__content')
    
    $news.textContent = $text.textContent
    fillTreeItem(selectedBlock)

    cursorPosition = getCursorPosition($text)


    let txt = $text.textContent
    if (event.key === 'Enter') {
        // $text.innerHTML = txt.slice(0,cursorPosition) + '<br />' + txt.slice(cursorPosition)
        // $news.innerHTML = txt.slice(0,cursorPosition) + '<br />' + txt.slice(cursorPosition)

        let selection = document.getSelection()
        let range = new Range
        range.setStart($text, 0)
        range.setEnd(selection.anchorNode, selection.anchorOffset)

        let br = document.createElement('br')
        range.insertNode(br)

        //

        let range2 = new Range
        range2.setStart($news, 0)
        range2.setEnd($news, cursorPosition)

        let br2 = document.createElement('br')
        range2.insertNode(br2)
    }

    

    
    
}

export function clickText(event) {

    let $text = document.querySelector('.textForm__content')
    cursorPosition = getCursorPosition($text)
}