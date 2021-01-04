const navButton = document.querySelector(".navButton");
const container = document.querySelector(".container");
const nav = document.querySelector('.nav')
let navShown = false;

navButton.addEventListener('click',() => {
    if(navShown) {
        navShown = false
        container.classList.remove('rotated')
        nav.classList.remove('active')
    }
    else {
        navShown = true
        container.classList.add('rotated')
        nav.classList.add('active')
    }
})