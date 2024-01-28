// Togel Spin Class On Icon
document.querySelector(".Togel-Setings .fa-gear").onclick = function() {
    
    this.classList.toggle("fa-spin");

    document.querySelector(".Setings-box").classList.toggle("open");
};

// Switch Colors
const y = document.querySelectorAll(".Colors-List li");

// Loop On All List Items
y.forEach(li => {

 
// Click On Every List Items
li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

  });

});
 

// Select Landing page Element
let LandingPage = document.querySelector(".Landing-Page");

// Get Array Of Imgs
let ImgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {

    // Get Random Number
    randomNumber = Math.floor(Math.random() * ImgsArray.length);

    // Change Backgraoud Imge Url
    LandingPage.style.backgroundImage = 'url("Imgs/'+ ImgsArray[randomNumber] +'")';

},5000);
 