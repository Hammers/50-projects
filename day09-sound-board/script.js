const buttons = document.querySelectorAll('.btn');

let currentAudio = null;

for(let button of buttons){
    button.addEventListener('click',() => {
        if(currentAudio !== null) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        let audio = button.querySelector('audio');
        audio.play();
        currentAudio = audio;
    })
}