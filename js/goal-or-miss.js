let goalieHit = false;
let postHit = false;
const post = {
    top: 220,
    left: 100,
    right: 800,
    bottom: 454,
}

function getGoalieBorders() {
    let goalie = document.querySelector('.goalie__container');
    let goalieStyleLeft = goalie.offsetLeft;
    let goalieStyleRight = goalie.offsetLeft + 200;
    let goalieStyleTop = goalie.offsetTop;
    let goalieStyleBottom = goalie.offsetTop + 200;

    return [goalieStyleLeft, goalieStyleRight, goalieStyleTop, goalieStyleBottom];

}

function getBallBorders() {
    let ball = document.querySelector('#ball');
    let ballStyleLeft = ball.offsetLeft;
    let ballStyleTop = ball.offsetTop;

    return [ballStyleLeft, ballStyleTop];
}

function checkIfBallHitGoalie() {
    let goalieBorders = getGoalieBorders();
    let ballBorders = getBallBorders();

    if ((ballBorders[0] > goalieBorders[0]) && (ballBorders[0]  < goalieBorders[1]) 
    && (ballBorders[1] > goalieBorders[2]) && (ballBorders[1] < goalieBorders[3])) {
        return goalieHit = true;
    } 
}

function checkIfBallHitPost() {
    let ballBorders = getBallBorders();
    if ((ballBorders[0] > post.left) && (ballBorders[0] < post.right) && (ballBorders[1] > post.top) && (ballBorders[1] < post.bottom)) {
        return postHit = true;
    }
}

function checkIfGoalScored() {
    return (checkIfBallHitPost() && !checkIfBallHitGoalie()) ? true : false;
}