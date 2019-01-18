var ball = document.querySelector('#ball');
var ballStrength = document.querySelector('#strength-bar-pointer');
var ballDirection = document.querySelector('#direction-bar-pointer');
var ballNewPostionLeft;
var ballNewPostionRighth;

document.addEventListener("keydown", function (event) {
    if (event.k = 'd') {
        var ballStrengthPosition = ballStrength.style.left;
        var ballDirectionPosition = ballDirection.style.left;
    }
    ballNewPostionLeft = `${ballStrength.style.left}:  ballDirectionPosition`
})