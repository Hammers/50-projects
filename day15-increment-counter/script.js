const numbers = document.querySelectorAll('.counter .number');

for(let number of numbers) {
    let total = parseInt(number.innerText);
    number.innerText = '0';
    let inc = total / 35;
    setTimeout(incrementNumber,20,number,total,inc)
}

function incrementNumber(number,total,inc) {
    let val = Math.floor(parseInt(number.innerText) + inc);
    if(val >= total){
        number.innerText = total;
    } else {
        number.innerText = val;
        setTimeout(incrementNumber,20,number,total,inc)
    }
}