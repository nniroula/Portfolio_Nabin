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
    // evt.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less >>";
    //   btnText.innerHTML = "Read more >>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
    //   btnText.innerHTML = "Read less >>";
        btnText.innerHTML = "Read more >>";
      moreText.style.display = "inline";
    }
  }

//   jobEducation    educationButton    

// Education Read less or more
function myEducationFunction() {
    // evt.preventDefault();
    var dots = document.getElementById("jobEducation");
    var moreContent = document.getElementById("moreContent");
    var button = document.getElementById("educationButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Read less >>";
    //   btnText.innerHTML = "Read more >>";
        moreContent.style.display = "none";
    } else {
      dots.style.display = "none";
    //   btnText.innerHTML = "Read less >>";
        button.innerHTML = "Read more >>";
        moreContent.style.display = "inline";
    }
  }