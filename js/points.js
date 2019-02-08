var scoresFromLocalStorage = localStorage.getItem('scores')
var scores = JSON.parse(scoresFromLocalStorage) || [];
var list = document.querySelector('#scores');
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

  var items = scores.slice(0,3)
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML = `<div class="scores-close" onclick="closeScores()">X</div><div class="scores-visible-trophy-less"></div>${items}<div class="scores-show-more" onclick="showMoreScores()">SHOW MORE</div>`;
}

function showMoreScores() {
  list.classList.add("more-scores");
  list.classList.remove("less-scores");

  var allItems = scores.slice(0, 10)
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML = `<div class="scores-close" onclick="closeScores()">X</div><div class="scores-visible-trophy-more"></div>${allItems}<div class="scores-show-less" onclick="showLessScores()">SHOW LESS</div>`;
}

function showLessScores() {
  list.classList.add("less-scores");
  list.classList.remove("more-scores");

  var items = scores.slice(0, 3)
    .map((score, i) => `<li class="scores-element">${i + 1}. ${score.initials}: ${score.points} pts.</li>`)
    .join('');

  list.innerHTML = `<div class="scores-close" onclick="closeScores()">X</div><div class="scores-visible-trophy-less"></div>${items}<div class="scores-show-more" onclick="showMoreScores()">SHOW MORE</div>`;
}

function closeScores() {
  list.className = "scores-hidden";
}

