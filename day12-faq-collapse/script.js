const buttons = document.querySelectorAll('.faq button');

for(let button of buttons) {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    })
}