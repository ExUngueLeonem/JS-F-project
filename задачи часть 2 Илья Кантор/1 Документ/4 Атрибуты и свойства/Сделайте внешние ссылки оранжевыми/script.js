
  let links = document.querySelectorAll('a');
  for (let link of links) {
    if (link.innerHTML.includes('internal') == true) {
    } else if (link.innerHTML.includes('://')) {
      console.log(link.innerHTML, link.innerHTML.includes('://'));
      link.style.color = 'orange';
    }
  }


  /* ============ */


  let links = document.querySelectorAll('a')
for (let link of links) {
  if (link.getAttribute('href') !== null && 
  link.getAttribute('href').includes('://') && 
  !(link.getAttribute('href').includes('internal')) ) {
  link.style.color = 'orange';
  }
}

/* ============= */

let selector = 'a[href*="://"]:not([href^="http://internal.com"])'
let link = document.querySelectorAll(selector);
link.forEach(link => link.style.color = 'red')
