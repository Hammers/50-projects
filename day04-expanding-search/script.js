const btn = document.getElementById('btn')
const container = document.getElementById('container')
const input = document.getElementById('search')

btn.addEventListener('click',() => {
        container.classList.toggle("active");
        input.focus()
    
})