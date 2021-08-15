
function hideText(){
    if (document.getElementById('text').style.display == 'none') { 
        document.getElementById('text').style.display = '';
    } else {
        document.getElementById('text').style.display = 'none';
    } 

}

hider.onclick = hideText