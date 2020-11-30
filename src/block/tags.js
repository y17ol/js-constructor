// div

export function div(divClass = '', content = 'div text') {
    return `<div class="${divClass}">${content}</div>`
}

export function divO(divClass = '', id = '', option = '', content = 'divO text') {
    return `<div class="${divClass}" id="${id}" ${option}>${content}</div>`
}

export function textareaDiv(taClass, content) {
    return `<div class="form-control ${taClass}" contenteditable="true">${content}</div>`
}

// bootstrap

export function container(content = 'container content') {
    return div('container', content)
}

export function rowCol(colClass, content, rowClass) {
    return row(col(colClass, content), rowClass)
}

export function row(content = 'row content', rowClass = '') {
    return div(`row ${rowClass}`, content)
}

export function col(colClass = 'col-12', content = 'col content') {
    return div(colClass === '' ? 'col-12' : colClass, content)
}

// form

export function form(formClass = '', name = '', content = 'form content') {
    return `<form class="${formClass}" name="${name}">${content}</form>`
}

export function button(type = 'button', btnClass = '', content = 'button text', title = '', dataToggle = '') {
    return `<button type="${type === '' ? 'button' : type}" class="${btnClass}" title="${title}" data-toggle="${dataToggle}">${content}</button>`
}

export function input(type = 'text', inputClass, placeholder = '', value = '', size = '') {
    return `<input type="${type === '' ? 'text' : type}" class="form-control ${inputClass}" placeholder="${placeholder}" value="${value}" size="${size}">`
}

export function inputNum(inputClass = '', value = 1, min = 1, max = 10, size = '') {
    return `<input type="number" class="form-control ${inputClass}" value="${value}" min="${min}" max="${max}" size="${size}">`
}

export function textarea(taClass = '', placeholder = '', value = '', rows = '1') {
    return `<textarea class="form-control ${taClass}" placeholder="${placeholder}" value="${value}" rows="${rows}">${value}</textarea>`
}

export function select(selectClass = '', content = 'select content') {
    return `<select class="form-control ${selectClass}" >${content}</select>`
}

export function option(value = 'option value', content = 'option content') {
    return `<option value="${value}">${content}</option>`
}

// tabs

export function ulTab(tabClass = '', content = 'ulTab content') {
    return `<ul class="nav nav-tabs ${tabClass}" role="tablist">${content}</ul>`
}

export function liTab(content = 'liTab content') {
    return `<li class="nav-item" role="presentation">${content}</li>`
}

export function aTab(tabClass = '', href = '', content = 'aTab content') {
    return `<a class="nav-link ${tabClass}" data-toggle="tab" href="#${href}" role="tab">${content}</a>`
}  

// tree

export function aTree(aClass = '', id = '', content = 'aTree content') {
    return `<a class="list-group-item list-group-item-action ${aClass}" id="${id}">${content}</a>`
}

// other

export function icon(iconClass) {
    return `<i class="fa fa-${iconClass}"></i>`
}

export function p(content) {
    return `<p>${content}</p>`
}