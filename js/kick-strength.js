
// function move() {
//     var elem = document.getElementById("myBar");
//       if (width < 100) {
//         width+=10;
//         elem.style.width = width + '%';
//         elem.innerHTML = width * 1 + '%';
//       } 
//   }


var strength = 0;
var strengthBar = document.querySelector('#strength-bar');

function kickStrength() {

    document.addEventListener("keydown", function (event) {
        if (event.which === 32) {
            start = new Date();
            strength += 1;
        }
        strengthBar.style.width = `${strength}px`;
        console.log(strength);
    });

}

kickStrength();