function getDirection() {
    let direction = document.querySelector('#direction-bar-pointer');
    let directionNumber = parseFloat(direction.style.left);
    let directionMultiplied = directionNumber * 2;

    return directionMultiplied;
}


function getStrength() {
    let strength = document.querySelector('#strength-bar-pointer');
    let strengthNumber = parseFloat(strength.style.top);
    let strengthMultiplied = strengthNumber * 2;

    return strengthMultiplied;
}

function kickTheBall() {
    addEventListener('keydown', event => {
        if (event.code === 'KeyD') {
            ball.style.top = `${getStrength()}px`;
            ball.style.left = `${getDirection()}px`;
        }
    })
}

kickTheBall() 