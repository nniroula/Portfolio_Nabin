function randomRGB(){
    // Math.random() generates a random number between 0 to 1, 1 exclusive. Math.floor() trauncates decimal portion.
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

//const h2 = document.querySelector('h2');
//h2.style.color = 'red';
//h2.style.color = randomRGB(); // move this down in setInterval

// setInterval(function(){
//     h2.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');
// for(let letter of letters){
//     letter.style.color = randomRGB();
// }

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
}, 1000)