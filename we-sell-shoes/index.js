/////////popup//////////////

//declare default vars
const popUp = document.getElementById("pop-up");
const popUpLayer = document.getElementById("pop-up-layer");
const closeModal = document.getElementById("close-pop-up");

//nav-bar button
const subBtn = document.getElementById("sub-btn");

//navbar button click makes the popup appear
subBtn.addEventListener("click", () => {
  popUpLayer.style.display = "flex";
});

//close model click makes the popup disappear
closeModal.addEventListener("click", function() {
  popUpLayer.style.display = "none";
});

//navbar button click makes the popup appear
subBtn.addEventListener("click", () => {
  popUpLayer.style.display = "flex";
});

//close model click makes the popup disappear
closeModal.addEventListener("click", function() {
  popUpLayer.style.display = "none";
});

let popUpSeconds = 40;

//trigger popup after seconds variable
let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = "flex";

  window.clearInterval(popUpFun);
}, popUpSeconds * 1000);

///////////////////

/*************
testimonial section
**************/

//three dots
const nextNext = document.getElementById("next-next");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

//individual testimonials
const testimonial1 = document.querySelector(".testimonial1");
const testimonial2 = document.querySelector(".testimonial2");
const testimonial3 = document.querySelector(".testimonial3");

//testimonial parent container
const tests = document.querySelector(".tests");

let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains("second")) {
    tests.classList.remove("second");

    //add the class which shows the third testimonial
    tests.classList.add("third");
  }
}, 4000);

let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains("first")) {
    tests.classList.remove("first");

    //add the class that shows the second testimonial
    tests.classList.add("second");
  }
}, 8000);

let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains("third")) {
    tests.classList.remove("third");

    //add the class that has the first testimonial
    tests.classList.add("first");
  }
}, 16000);

//Create a reusable function for clicking on the dots.
function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (tests.classList.contains(oldClassOne)) {
    tests.classList.remove(oldClassOne);
  }

  if (tests.classList.contains(oldClassTwo)) {
    tests.classList.remove(oldClassTwo);
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add(newClass);
}

nextNext.addEventListener("click", function() {
  dotClick("second", "first", "third");
});

next.addEventListener("click", function() {
  dotClick("first", "third", "second");
});

prev.addEventListener("click", function() {
  dotClick("second", "third", "first");
});

/////////////FAQ accordion section///////////////

//delcare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    //if sibling is open, close it, if closed, open it
    if (panel.style.maxHeight) {
      //panel is open open
      panel.style.maxHeight = null; //add this line
    } else {
      //panel is closed
      panel.style.maxHeight = panel.scrollHeight + "px"; //add this line
    }
  });
}
