backgroundMusic = new Audio('always.mp3');

let musicBtn = document.querySelector('.music');
let musicOn = false;

function playPause() {
    if (musicOn) {
        backgroundMusic.pause();
        musicOn = false;
        musicBtn.style.backgroundImage = 'url(/images/musicOff.png)';
    } else {
        backgroundMusic.play();
        musicOn = true;
        musicBtn.style.backgroundImage = 'url(/images/musicOn.png)';
    }
}

musicBtn.addEventListener('click', playPause);
