const navItems = document.querySelectorAll('.nav-item');
const button = document.querySelector('.nav button')


for(let label of navItems) {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => (
            `<span style="transition-delay: ${idx * 50}ms">
            ${letter}
            </span>`
        ))
        .join('')
}

button.addEventListener('click',() => {
    let timeout = 0
    for(let navItem of navItems) {
        setTimeout(function(){navItem.classList.toggle('hidden');},timeout);
        timeout += 200
    }
})