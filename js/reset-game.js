resetGame()

function resetGame() {
    var ball = document.querySelector('#ball');
    document.addEventListener("keyup", function (event) {
        if (event.code === 'KeyS') {
            setTimeout(function () {
                scoring();
            }, 2100);
            setTimeout(function () {
                captureDirection();
                ball.style.left = `50%`;
                ball.style.top = `100%`;
                ball.style.width = `50px`;
                ball.style.height = `50px`;
            }, 2400)

        }
    });
}