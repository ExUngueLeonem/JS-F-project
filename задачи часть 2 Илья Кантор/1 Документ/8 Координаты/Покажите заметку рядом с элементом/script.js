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
    if (position == 'top'){
      elem.style.top = anchorPos.x + 'px';
    }

    if (position == 'right'){
      elem.style.top = anchorPos.x + anchorPos.height/2 + 'px';
      elem.style.left = anchorPos.y + anchorPos.width + 'px';

    }

    if (position == 'bottom'){
      elem.style.top = anchorPos.x + anchorPos.height + 'px';

    }



    /* 
    я получаю координаты anchor
    если position = что-то, то
    я позиционирую elem относительно anchor выше/правее/нииже
    (получаю координаты и ставлю относительно экрана)

"top"
"right"
"bottom" */
  }

  /**
   * Показывает заметку с заданным содержимым на заданной позиции
   * относительно элемента anchor.
   */
  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  // test it
  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");