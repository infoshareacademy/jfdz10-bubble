var scoresFromLocalStorage = localStorage.getItem('scores')
var scores = JSON.parse(scoresFromLocalStorage) || [];
var list = document.querySelector('#scores');
var top3Scores = [...scores].slice(0, 3);
var moreScores = [...scores].slice(0, 10);
console.log(top3Scores);
console.log(moreScores);
list.style.transition = "all 2s";

function getSortedScoresDESC(scores) {
  return scores.sort((prev, next) => next.points - prev.points);
}

function saveScoresInLocalStorage(initials, points) {
  scores.push({ initials, points });
  localStorage.setItem('scores', JSON.stringify(getSortedScoresDESC(scores)));
}

function generateScoresAsNodeList() {
  list.className = "scores-visible";

  var items = top3Scores
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML += `</div>${items}<div class="scores-show-more" onclick="showMoreScores()">SHOW MORE</div>`;
}

function showMoreScores() {
  list.classList.add("more-scores");
  list.classList.remove("less-scores");

  var allItems = moreScores
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML = `<div class="scores-close" onclick="closeScores()">X</div><div class="scores-visible-trophy-more"></div>${allItems}<div class="scores-show-less" onclick="showLesScores()">SHOW LESS</div>`;
}

function showLesScores() {
  list.classList.add("less-scores");
  list.classList.remove("more-scores");

  var items = top3Scores
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML = `<div class="scores-close" onclick="closeScores()">X</div><div class="scores-visible-trophy-less"></div>${items}<div class="scores-show-more" onclick="showMoreScores()">SHOW MORE</div>`;
}

function closeScores() {
  list.className = "scores-hidden";
}

// saveScoresInLocalStorage('Kasia', 32);
// saveScoresInLocalStorage('Adam', 34);
// saveScoresInLocalStorage('Iza', 36);
// saveScoresInLocalStorage('Olek', 16);
// saveScoresInLocalStorage('Jacek', 39);
// saveScoresInLocalStorage('Wojtek', 26);
// saveScoresInLocalStorage('Karol', 26);
// saveScoresInLocalStorage('Karolina', 66);
// saveScoresInLocalStorage('Bartek', 29);
// saveScoresInLocalStorage('Niklas', 3);
// saveScoresInLocalStorage('Roman Hoffer', 67);
// generateScoresAsNodeList();
