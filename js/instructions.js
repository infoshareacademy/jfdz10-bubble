let instructionsBtn = document.querySelector('.instructions');
let instructionsPage = document.querySelector('.instructions__page');
let gameView = document.querySelector('.game');
let goalie = document.querySelector('#goalie__container');
let direction = document.querySelector('#direction-bar-pointer');

function showInstructions() {
    if (gameView.style.display === 'block') {
        instructionsPage.style.display = 'block';
        gameView.style.display = 'none';
        goalie.style.left = '350px';
        direction.style.left = '150px';
    } else {
        instructionsPage.style.display = 'none';
        gameView.style.display = 'block';
        goalie.style.left = '350px';
        direction.style.left = '150px';
    }
};

instructionsBtn.addEventListener('click', showInstructions);


backgroundMusic = new Audio('always.mp3');
backgroundMusic.play();

let musicBtn = document.querySelector('.music');
let musicOn = true;

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