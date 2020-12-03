import {
    div, divO, textareaDiv,
    container, rowCol, row, col, 
    form, button, input, inputNum, textarea, select, option,
    ulTab, liTab, aTab,
    icon, p
} from './tags'

import {arrayFontFamily, arrayFontWeight} from './general'

//////////////////////////////////////////////////////
///                                                ///
///                      main                      ///
///                                                ///
//////////////////////////////////////////////////////

export function main() {
    return div('main', container(
        row(itemTree() + preview()) + creation()
    ))
}

//////////////////////////////////////////////////////////////////
//                                                              //
//                          item tree                           //
//                                                              //
//           Element tree to the left of viewing news           //
//                                                              //
//////////////////////////////////////////////////////////////////

function itemTree() {
    return col('col-12 col-xl-3', 
        div('itemTree', itemTreeTitle() + '<hr>' + itemTreeChange() + '<hr>' + itemTreeTree() + '<hr>' + itemTreeAdd())
    )
}

function itemTreeTitle() {
    return rowCol('col-12', div('itemTree__title title', 'Element tree'))
}

function itemTreeChange() {
    return form('itemTree__change', 'change', row(
        col('col-4', button('', 'itemTree__change__up', icon('angle-up allIcon'))) +
        col('col-4', button('', 'itemTree__change__down', icon('angle-down allIcon'))) +
        col('col-4', button('', 'itemTree__change__delete', icon('trash-o allIcon')))
    ))
}

function itemTreeTree() {
    return divO('list-group', 'tree-maxsize', '', div('itemTree__tree', '', ''))
}

function itemTreeAdd() {
    return form('itemTree__add', '',
        rowCol('col-12', div('add__text', button('', '', 'Add text'))) +
        rowCol('col-12', div('add__image', button('', '', 'Add image')))
    )
}

//////////////////////////////////////////////////////////////////
//                                                              //
//                            preview                           //
//                                                              //
//                   Developing news preview                    //
//                                                              //
//////////////////////////////////////////////////////////////////

function preview() {
    return col('col-12 col-xl-9', div('preview', previewTitle() + previewNews()))
}

function previewTitle() {
    return rowCol('', div('preview__title title', 'Preview your news'))
}

function previewNews() {
    return div('preview__news', '')
}

//////////////////////////////////////////////////////////////////
//                                                              //
//                          creation                            //
//                                                              //
//      News creation form located below news preview and       //
//                         element tree                         //
//                                                              //
//////////////////////////////////////////////////////////////////

function creation() {
    return div('creation', 
        row(
            col('col-4', div('creation__title title', 'News creation form')) + 
            col('col-8', toolbox())
        ) +
        row(
            col('col-12', div('tab-content', textForm() + imageForm()))
        )
        
    ) 
}

function toolbox() {
    return div('toolbox',
        ulTab('nav-fill',
            liTab(aTab('active toolbox__txt', 'textForm', 'Text')) +
            liTab(aTab('toolbox__img', 'imageForm', 'Image'))
        )
    )    
}

function textForm() {
    return divO('tab-pane fade show active textForm', 'textForm', 'role="tabpanel"', 
        form('', '',
            textFormStyles() +
            row(
                col('col-2', textFormFontFamily()) +
                col('col-2', textFormFontSize()) +
                col('col-2', textFormFontWidth()) +
                col('col-2', textFormFontWeight()) +
                col('col-2', textFormColor()) +
                col('col-2', textFormBgcolor())
            ) +
            rowCol('', textFormInput())
        )  
    )
}

function textFormStyles() {
    return div('textForm__styles',
        row(
            col('col-1', button('', 'textForm__italic textForm__btn', icon('italic allIcon'), 'italic', 'tooltip', 'false')) +
            col('col-1', button('', 'textForm__strikethrough textForm__btn', icon('strikethrough allIcon'), 'strikethrough', 'tooltip', 'false')) +
            col('col-1', button('', 'textForm__underline textForm__btn', icon('underline allIcon'), 'underline', 'tooltip', 'false')) +
            col('col-1 offset-md-1', button('', 'textForm__alignLeft textForm__btn', icon('align-left allIcon'), 'align-left', 'tooltip', 'false')) +
            col('col-1', button('', 'textForm__alignCenter textForm__btn', icon('align-center allIcon'), 'align-center', 'tooltip', 'false')) +
            col('col-1', button('', 'textForm__alignRight textForm__btn', icon('align-right allIcon'), 'align-right', 'tooltip', 'false')) +
            col('col-1', button('', 'textForm__alignJustify textForm__btn', icon('align-justify allIcon'), 'align-justify', 'tooltip', 'false'))
        , 'justify-content-between')
    )
}

function textFormFontFamily() {
    return div('border',
        icon('font allIcon') + 'Font' +
        select('custom-select textForm__fontFamily',
            arrayFontFamily.map(item => 
                option(`'${item[0]}', '${item[1]}'`, item[0])    
            )
        )
    )    
}

function textFormFontSize() {
    return div('border',
        icon('text-height allIcon') + 'Size' +
        inputNum('textForm__fontSize', 20, 1, 200)
    )
}

function textFormFontWidth() {
    return div('border',
        icon('text-width allIcon') + 'Interval' +
        inputNum('textForm__FontWidth', 1, -5, 100)
    )
}

function textFormFontWeight() {
    return div('border',
        icon('bold allIcon') + 'Bold' +
        select('custom-select textForm__fontWeight', arrayFontWeight.map(item => option(item, item)))
    )
}

function textFormColor() {
    return div('border',
        icon('adjust allIcon') + 'Color' +
        input('color', 'textForm__color', '#000000', '#000000')
    )
}

function textFormBgcolor() {
    return div('border',
        icon('adjust allIcon') + 'Background' +
        input('color', 'textForm__bgColor', '#ffffff', '#ffffff')
    )
}

function textFormInput() {
    return div('input-group textForm__input', 
        textarea('textForm__content', 'Your text', 'Your text', 8) +
        div('input-group-append textForm__btnClear', 
            button('button', '', icon('times-circle allIcon'))
        )
    )
}

function imageForm() {
    return divO('tab-pane fade  imageForm', 'imageForm', 'role="tabpanel"', 
        form('', '', 
            'image'
        )
    )
}