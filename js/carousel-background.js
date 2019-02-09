let currentBackgroundIndex = 0;
const backgrounds = [
'streetball1.jpg',
'streetball2.jpg',
'streetball3.jpg',
];

const backgrundElement = document.querySelector('.background');

setInterval(() => {
currentBackgroundIndex++
if (currentBackgroundIndex >= backgrounds.length) {
    currentBackgroundIndex = 0
}

backgrundElement.style.backgroundImage= `url('./../images/${backgrounds[currentBackgroundIndex]}')`;
},3000);

