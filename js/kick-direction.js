var directionPointer = document.querySelector('#direction-bar-pointer');

function captureDirection() {

    directionPointerRight();

    function directionPointerRight() {
        var interval = setInterval(function () {
            directionPointer.style.left = `${directionPointer.offsetLeft + 2}px`;

            document.addEventListener("keydown", function (event) {
                if (event.key === 'a') {
                    clearInterval(interval);
                }
            });


            if (directionPointer.style.left === '300px') {
                clearInterval(interval);
                directionPointerLeft();
            }
        }, 0);
    }

    function directionPointerLeft() {
        var interval = setInterval(function () {
            directionPointer.style.left = `${directionPointer.offsetLeft - 2}px`;

            document.addEventListener("keydown", function (event) {
                if (event.key === 'a') {
                    clearInterval(interval);
                }
            });


            if (directionPointer.style.left === '0px') {
                clearInterval(interval);
                directionPointerRight();
            }
        }, 0);
    };
}

captureDirection();