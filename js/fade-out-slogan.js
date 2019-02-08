let current = 0;
setInterval(() => {
const slides = document.querySelectorAll('.slogan');
for (let i=0; i<slides.length; i++) {
    slides[i].style.opacity = 0;
}
if(current !== slides.length -1) {
    current++; 
} else {
current = 0;
}
slides[current].style.opacity =1;
}, 3000);

