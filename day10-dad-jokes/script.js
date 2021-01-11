const joke = document.querySelector('#joke');
const jokeButton = document.querySelector('#jokeButton');

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    
    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => {
            joke.innerText = data.joke;
        });
}

jokeButton.addEventListener('click',generateJoke);