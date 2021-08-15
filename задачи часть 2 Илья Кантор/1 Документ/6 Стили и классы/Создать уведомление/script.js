function showNotification({top = 0, right = 0, className, html}) {
  let div = document.createElement('div');
  
  div.style.position = "absolute";
  div.style.top = top + "px"; 
  div.style.right = right + "px";
  div.className =  className;
  div.innerHTML = html;
  div.style.backgroundColor = 'red';
  div.style.color = '#fff'

  //let styleText = JSON.stringify(arguments[0]).slice(1, -1);
  //div.style.cssText = styleText;
  document.body.append(div)
  setTimeout(() => div.remove(), 1000);
  //console.log(styleText);
  //console.log(div.style.cssText);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
    
  });
}, 2000);
