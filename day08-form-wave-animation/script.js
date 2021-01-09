const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.form-control input')

for(let label of labels) {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => (
            `<span style="transition-delay: ${idx * 50}ms">
            ${letter}
            </span>`
        ))
        .join('')
}

for(let input of inputs) {
    input.addEventListener('keyup', () => {
        if(input.value !== ""){
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    })
}