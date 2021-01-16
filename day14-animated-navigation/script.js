const navItems = document.querySelectorAll('.nav li');
const button = document.querySelector('.icon')
const nav = document.querySelector('.nav');

for(let i = 0; i < navItems.length; i++)
{
    navItems[i].style.transitionDuration = `${(navItems.length - i) * 100}ms`;
}


button.addEventListener('click',() => {
    nav.classList.toggle('active');
})