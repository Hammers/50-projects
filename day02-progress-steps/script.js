let step = 0;

const numbers = document.querySelectorAll(".number");
const line = document.querySelector(".progress");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

prevButton.addEventListener('click',() => prevPressedHandler())
nextButton.addEventListener('click',() => nextPressedHandler())

function prevPressedHandler() {
    if(step === 3) {
        nextButton.disabled = false
    }
    if(step > 0) {
        numbers.item(step).classList.remove('active')
        step -= 1;
        line.style.width = `${step*100/3}%`;
    }
    if(step === 0){
        prevButton.disabled = true;
    }
}

function nextPressedHandler() {
    if(step === 0) {
        prevButton.disabled = false
    }
    if(step < 3) {
        step += 1;
        numbers.item(step).classList.add('active')
        line.style.width = `${step*100/3}%`;
    }
    if(step === 3){
        nextButton.disabled = true;
    }
}