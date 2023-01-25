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


// Read more, read less
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline"; // this will show the content
        btnText.innerHTML = "Read less >>"; // change the button text
    } else {
        btnText.innerHTML = "Read more >>"; // change the button text
        moreText.style.display = "inline"; // display the content
        dots.style.display = "none"; // hide the element
    }
  } 

// Education Read less or more
function myEducationFunction() {
    let dots = document.getElementById("jobEducation");
    let moreContent = document.getElementById("moreContent");
    let button = document.getElementById("educationButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Read less >>";
        moreContent.style.display = "none";
    } else {
      dots.style.display = "none";
        button.innerHTML = "Read more >>";
        moreContent.style.display = "inline";
    }
  }

//   experience show and hide
function myExperienceFunction() {
    let exps = document.getElementById("exps");
    let moreText = document.getElementById("moreExps");
    let btnText = document.getElementById("expBtn");
  
    if (exps.style.display === "none") {
        exps.style.display = "inline";
        btnText.innerHTML = "Read less >>";
        moreText.style.display = "none";
    } else {
        exps.style.display = "none";
        btnText.innerHTML = "Read more >>";
        moreText.style.display = "inline";
    }
  }