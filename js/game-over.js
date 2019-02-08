function endGame() {
    let myInitials = prompt("Enter your initials:");
    let myScore = score;

    saveScoresInLocalStorage(myInitials, myScore);
    totalReset();
    generateScoresAsNodeList();
    
};


function totalReset() {
    tries = 3;
    score  = 0;
    currentScoreNode.textContent = "SCORE: " + score;
    triesNode.textContent = "TRIES: " + tries;
    list.innerHTML = "";
}


