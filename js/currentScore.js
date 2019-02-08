var score = 0;
var tries = 3;
var hasScored = true;
var currentScoreNode = document.getElementById('current__score')
var triesNode = document.getElementById('tries')

currentScoreNode.textContent = "SCORE: " + score
triesNode.textContent = "TRIES: " + tries


function scoring(hasScored) {
    
    if (hasScored) {
        score++
    } else {
        tries--
        triesNode.textContent = "TRIES: " + tries
    }
    
    if (tries === 0) {
        endgame();
    }

    currentScoreNode.textContent = "SCORE: " + score;
    return score, tries
}
