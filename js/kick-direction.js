// var strengthPointer = document.querySelector('#strength-bar-pointer');

// function strengthBar() {

//     strengthPointerRight();

//     function strengthPointerRight() {
//         var interval = setInterval(function () {
//             strengthPointer.style.left = `${strengthPointer.offsetLeft + 2}px`;

//             document.addEventListener("keydown", function (event) {
//                 if (event.which === 32) {
//                     clearInterval(interval);
//                     var strength =  strengthPointer.style.left;
//                     return strength;
//                 }
//             });
            

//             if (strengthPointer.style.left === '300px') {
//                 clearInterval(interval);
//                 strengthPointerLeft();
//             }
//         }, 0);
//     }

//     function strengthPointerLeft() {
//         var interval = setInterval(function () {
//             strengthPointer.style.left = `${strengthPointer.offsetLeft - 2}px`;

//             document.addEventListener("keydown", function (event) {
//                 if (event.which === 32) {
//                     clearInterval(interval);
//                     var strength =  strengthPointer.style.left;
//                     return strength;
//                 }
//             });
            

//             if (strengthPointer.style.left === '0px') {
//                 clearInterval(interval);
//                 strengthPointerRight();
//             }
//         }, 0);
//     };
// }