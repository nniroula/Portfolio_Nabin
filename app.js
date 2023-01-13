function randomRGB(){
    // Math.random() generates a random number between 0 to 1, 1 exclusive. Math.floor() trauncates decimal portion.
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll('.letter');

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
}, 1000)


const introLetters = document.querySelectorAll('.inro');

setInterval(function(){
    for(let alphabet of introLetters){
        alphabet.style.color = randomRGB();
    }
}, 1000)