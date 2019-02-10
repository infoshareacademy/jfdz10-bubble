function endGame() {
    var myInitials = prompt("Enter your initials:");
    if (myInitials === '' || myInitials === null) {myInitials = 'noname'}
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


