import {
    div, divO, 
    container, rowCol, row, col, 
    form, button, input, select, option,
    ulTab, liTab, aTab,
    icon
} from './tags'

//////////////////////////////////////////////////////
///                                                ///
///                     footer                     ///
///                                                ///
//////////////////////////////////////////////////////

export function footer() {
    return div('footer',
        container(
            rowCol('', 'FOOTER')
        )
    )    
}