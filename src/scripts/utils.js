function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

export function changeSelectedBlock(oldId, newId) {

    document.getElementById('item' + oldId).classList.remove('list-group-item-success')
    document.getElementById('item' + oldId).classList.add('list-group-item-light')

    document.getElementById('item' + newId).classList.remove('list-group-item-light')
    document.getElementById('item' + newId).classList.add('list-group-item-success')
}

export function fillTreeItem(idTreeItem = 0) {

    let $item = document.getElementById('item' + idTreeItem)
    let content = document.querySelector('.textForm__content').value

    $item.textContent = content.length > 15 ? content.substring(0, 15) + '...' : content
}

export function fillNewsText(idNewsText = 0) {

    let $newsText = document.getElementById('text' + idNewsText)

    $newsText.textContent = document.querySelector('.textForm__content').value 
    $newsText.style.fontFamily = document.querySelector('.textForm__fontFamily').value
    $newsText.style.fontSize = document.querySelector('.textForm__fontSize').value + 'px'
    $newsText.style.letterSpacing = document.querySelector('.textForm__FontWidth').value + 'px'
    $newsText.style.fontWeight = document.querySelector('.textForm__fontWeight').value
    $newsText.style.color = document.querySelector('.textForm__color').value
    $newsText.style.backgroundColor = document.querySelector('.textForm__bgColor').value

    $newsText.style.fontStyle = document.querySelector('.textForm__italic').value == 'true' ? 'italic' : 'normal'

    $newsText.style.textDecoration = 
      document.querySelector('.textForm__strikethrough').value == 'true' ?
        'line-through' :
        document.querySelector('.textForm__underline').value == 'true' ?
          'underline' :
          'none'
        
    $newsText.style.textAlign = 
      document.querySelector('.textForm__alignLeft').value == 'true' ?
        'left' :
        document.querySelector('.textForm__alignCenter').value == 'true' ?
          'center' :
          document.querySelector('.textForm__alignRight').value == 'true' ?
            'right' :
            document.querySelector('.textForm__alignJustify').value == 'true' ?
              'justify' :
              'auto'    
}

export function fillTextForm(idNewsText = 0) {

    let $newsText = document.getElementById('text' + idNewsText)

    document.querySelector('.textForm__content').value = $newsText.textContent 

    let $fontFamily = document.querySelector('.textForm__fontFamily')
    let str = $newsText.style.fontFamily
    str = str.substring(0, str.indexOf(',')).replace(/"/g, '')
    $fontFamily.selectedIndex = [...$fontFamily.options].findIndex(option => option.text === str)
        
    document.querySelector('.textForm__fontSize').value = $newsText.style.fontSize.slice(0, -2)
    document.querySelector('.textForm__FontWidth').value = $newsText.style.letterSpacing.slice(0, -2)
    document.querySelector('.textForm__fontWeight').value = $newsText.style.fontWeight
    document.querySelector('.textForm__color').value = RGBToHex($newsText.style.color)
    document.querySelector('.textForm__bgColor').value = RGBToHex($newsText.style.backgroundColor)

    document.querySelector('.textForm__italic').value = $newsText.style.fontStyle == 'italic' ? true : false

    if ($newsText.style.textDecoration == 'line-through')
      document.querySelector('.textForm__strikethrough').value = 'true'
    else if ($newsText.style.textDecoration == 'underline')
      document.querySelector('.textForm__underline').value = 'true'
    else {
      document.querySelector('.textForm__strikethrough').value = 'false'
      document.querySelector('.textForm__underline').value = 'false'
    }

    switch ($newsText.style.textAlign) {
      case ('left'):
        clearBtnAlign()
        document.querySelector('.textForm__alignLeft').value = 'true'
        break
      case ('center'):
        clearBtnAlign()
        document.querySelector('.textForm__alignCenter').value = 'true'
        break
      case ('right'):
        clearBtnAlign()
        document.querySelector('.textForm__alignRight').value = 'true'
        break
      case ('justify'):
        clearBtnAlign()
        document.querySelector('.textForm__alignJustify').value = 'true'
        break
      default:
        clearBtnAlign()
        break
    }
}

export function setTextStyle(target, ifTrue, ifFalse) {

  if (target.tagName == 'I')
    target = target.parentNode

  if (target.value == 'true') {
    ifTrue()
    target.value = 'false'
  } else {
    ifFalse()
    target.value = 'true'
  }  
}

export function clearBtnAlign() {
  document.querySelector('.textForm__alignLeft').value = 'false'
  document.querySelector('.textForm__alignCenter').value = 'false'
  document.querySelector('.textForm__alignRight').value = 'false'
  document.querySelector('.textForm__alignJustify').value = 'false'
}