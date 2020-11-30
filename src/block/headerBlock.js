import {
    div, divO, 
    container, rowCol, row, col, 
    form, button, input, select, option,
    ulTab, liTab, aTab,
    icon
} from './tags'

//////////////////////////////////////////////////////
///                                                ///
///                     header                     ///
///                                                ///
//////////////////////////////////////////////////////

export function header() {
    return div('header', 
        container(
            rowCol('', 'HEADER')
        )
    )
}


