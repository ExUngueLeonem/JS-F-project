 /**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
  function positionAt(anchor, position, elem) {
    // ... ваш код ...
    let anchorPos = anchor.getBoundingClientRect()
    console.log(anchor.getBoundingClientRect());
    elem.style.position = 'absolute';
    
    if (position.search('top') !== -1) {
      if ( checkingIn() ) {
        elem.style.top = '0px';
      } else {
        elem.style.top = anchorPos.x + 'px';
      }
    }

    if (position.search('right') !== -1) {
      elem.style.top = anchorPos.x + anchorPos.height/2 + 'px';
      elem.style.left = anchorPos.y + anchorPos.width + 'px';

    }

    if (position.search('bottom') !== -1) {
      elem.style.top = anchorPos.x + anchorPos.height + 'px';
    }
/* 
    if (position == 'bottom-in') {
      elem.style.top = anchorPos.x + anchorPos.height + 'px';
      
    }
 */


  }

  /**
   * Показывает заметку с заданным содержимым на заданной позиции
   * относительно элемента anchor.
   */
  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;

    checkingIn(position, note)

    positionAt(anchor, position, note);
  }

  function checkingIn(position, note) {
    if ( position.search('-in') == -1){
    document.body.append(note);
    return false
    } else {
      blockquote.append(note);
      blockquote.style.position = 'relative'
    return true
    }
  }

  // test it
  let blockquote = document.querySelector('blockquote');
/* 
  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");
 */


  showNote(blockquote, "top-in", "note above");
  showNote(blockquote, "right-in", "note at the right");
  showNote(blockquote, "bottom-in", "note below");