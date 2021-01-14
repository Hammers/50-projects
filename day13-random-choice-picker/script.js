const input = document.querySelector('#choiceInput')
const container = document.querySelector('#choices');

let selected = null;
let selections = 0;
let int = 0;

input.addEventListener('keydown',event => {
    if(event.code === 'Enter'){
        event.preventDefault();
        selections = 30;
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        if(input.value === '') {
            return;
        }
        let choices = input.value.split(',');
        choices = choices.map(x => x.trim()).filter(x => x !== '');
        for(let choice of choices) {
            let span = document.createElement('span');
            span.innerText = choice;
            container.appendChild(span);
        }
        input.value = null;
        int = setInterval(selectRandom,80)
    }
})

function selectRandom() {
    selections--;
    if(selections === 0) {
        selected.classList.add('chosen');
        clearInterval(int);
        return;
    }
    if(selected) {
        selected.classList.remove('selected');
    }
    selected = container.children[Math.floor(Math.random() * container.children.length)];
    selected.classList.add('selected');
}