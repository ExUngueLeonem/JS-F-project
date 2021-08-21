let table = document.getElementById('bagua-table');

document.addEventListener('click', focusInTd)


let obj = {};

obj.tdData
obj.canIClickTd = true
obj.td
obj.textarea
obj.editableWrapper

function focusInTd(event) {
    //console.log(event.target, canIClickTd);
  if (!event.target.closest('#bagua-table') || event.target.closest('th')) return
  if (obj.canIClickTd != true) return
  //if (!td.clientWidth) return

  obj.canIClickTd = false
  obj.td = event.target.closest('td');
  obj.textarea = document.createElement('textarea')
  
  obj.editableWrapper = document.createElement('div')
  obj.editableWrapper.style.width = obj.td.clientWidth + 'px'
  obj.editableWrapper.style.height = obj.td.clientHeight -2 + 'px'
  obj.textarea.style.height = obj.td.clientHeight + 'px'
  obj.editableWrapper.style.left = obj.td.getBoundingClientRect().x + 'px'
  obj.editableWrapper.style.top = obj.td.getBoundingClientRect().y + 'px'
  obj.editableWrapper.style.position = 'fixed'
  obj.editableWrapper.style.zIndex = 1000
  obj.textarea.className = 'td__textarea'
  obj.tdData = event.target.closest('td').innerHTML
  obj.editableWrapper.className = 'editableWrapper'
  table.prepend(obj.editableWrapper)
  obj.editableWrapper.prepend(obj.textarea)

  obj.editableWrapper.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );

  obj.textarea.value = obj.tdData  
  obj.textarea.focus()

}

document.addEventListener('click', okButton)

function okButton(event) {
  if(event.target.className != 'edit-ok') return

  console.log(event.target, obj.canIClickTd);


  obj.td.innerHTML = obj.textarea.value
  obj.editableWrapper.remove()
  obj.canIClickTd = true
}

document.addEventListener('click', cancelButton)

function cancelButton(event) {
    if(event.target.className != 'edit-cancel') return

    console.log(event.target, obj.canIClickTd);


    obj.td.innerHTML = obj.tdData
    obj.editableWrapper.remove()
    obj.canIClickTd = true
}
/* ваш код */ 