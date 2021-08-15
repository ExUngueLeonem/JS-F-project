document.addEventListener('click', showImage);

function showImage(event) {
    if (event.target.matches('#thumbs a')) event.preventDefault();

    if (!event.target.matches('#thumbs img')) return
    event.preventDefault()

    let largeImg = document.getElementById('largeImg')
    largeImg.src = event.target.closest('a').href
    
}