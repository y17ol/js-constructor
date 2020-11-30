import {
    div, divO, 
    container, rowCol, row, col, 
    form, button, input, select, option,
    ulTab, liTab, aTab,
    aTree,
    icon
} from './tags'

import {header} from './headerBlock'
import {main} from './mainBlock'
import {footer} from './footerBlock'

//////////////////////////////////////////////////////
///                                                ///
///                     general                    ///
///                                                ///
//////////////////////////////////////////////////////

export function content() {
    return header() + main() + footer()
}

//////////////////////////////////////////////////////
///                                                ///
///                     other                      ///
///                                                ///
//////////////////////////////////////////////////////

export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(";")
}

//
// font-style
//

// sans-serif
let sansSerif = [
    'Arial',
    'Arial Black',
    'Tahoma',
    'Verdana',
    'Lucida Sans Unicode',
    'Trebuchet MS',
    'MS Sans Serif',
    'Impact',
    'Century Gothic'
]
sansSerif = sansSerif.map(item => [item, 'sans-serif'])

// serif
let serif = [
    'Times New Roman',
    'Georgia',
    'Palatino Linotype',
    'MS Serif',
    'Sylfaen',
    'Garamond',
    'Century'
]
serif = serif.map(item => [item, 'serif'])

// monospace
let monospace = [
    'Courier New',
    'Lucida Console',
    'Consolas'
]
monospace = monospace.map(item => [item, 'monospace'])

// cursive
let cursive = [
    'Сomic Sans MS',
    'Monotype Corsiva',
    'Mistral'
]
cursive = cursive.map(item => [item, 'cursive'])

// all
export const arrayFontFamily = sansSerif.concat(serif, monospace, cursive)

//
// font-weight
//

export const arrayFontWeight = ['normal', 'bold', 100, 200, 300, 400, 500, 600, 700, 800, 900]

     

