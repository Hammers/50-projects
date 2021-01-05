const btn = document.getElementById('btn')
const container = document.getElementById('container')

let expanded = false;

btn.addEventListener('click',() => {
    if(!expanded){
        expanded = true;
        container.classList.add("active");
    }
    else {
        expanded = false;
        container.classList.remove("active");
    }
})