const instructions = document.querySelector('#instructions');
const key = document.querySelector('#key');
const keyCode = document.querySelector('#keyCode');
const code = document.querySelector('#code');

window.addEventListener('keydown', event => {
    instructions.classList.add('hidden');
    key.parentElement.classList.remove('hidden');
    key.innerText = event.key === ' ' ? 'Space' : event.key;
    keyCode.parentElement.classList.remove('hidden');
    keyCode.innerText = event.keyCode.toString();
    code.parentElement.classList.remove('hidden');
    code.innerText = event.code;
})