var score = 0;
var tries = 3;
var currentScoreNode = document.getElementById('current__score');
var triesNode = document.getElementById('tries');

currentScoreNode.textContent = "SCORE: " + score;
triesNode.textContent = "TRIES: " + tries;


function scoring() {   
    if (checkIfGoalScored()) {
        score++;
        if(musicOn) {
            var mySound = new sound();
            mySound.play()
        }
    } else {
        tries--;
        triesNode.textContent = "TRIES: " + tries;
    }    
    if (tries === 0) {
        endGame();
    }

    currentScoreNode.textContent = "SCORE: " + score;
    return [score, tries];
}