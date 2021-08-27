'use strict';
const a = document.querySelector('[data-style="JoinToBattleComponentStyle-buttonJoinA JoinToBattleComponentStyle-buttonJoin"]'); //експорт 1 кнопки
const join = document.querySelector('[data-style="DialogContainerComponentStyle-enterButton"]') //кнопка которая нажимаеться когда нажались какиет-то из двух
const b = document.querySelector('[data-style="JoinToBattleComponentStyle-buttonJoinB JoinToBattleComponentStyle-buttonJoin"]') //експорт 2 кнопки
const req1 = new Promise(function (resolve) { //проверя существует ли кнопка А аж тогда я виполню resolve так же и b 
  if (a) {
    resolve()
  }
})
const req2 = new Promise(function (resolve) {
  if (b) {
    resolve()
  }
})
const req3 = new Promise(function (resolve) {
  if (join) {
    resolve() //здесь когда нажата или кнока а или б тогда здесь нажимеиться ето
  }
})

req1.then(() => {
  a.click()
})
req2.then(() => {
  b.click()
});
req3.then(() => {
  join.click()
});


console.log('asfggghghhhh');