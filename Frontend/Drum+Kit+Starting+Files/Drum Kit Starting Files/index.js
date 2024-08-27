/* --1--
var numOfDrums = document.querySelector(".drum").length;

for (let i = 0; i < numOfDrums; i++) {
  document.querySelector(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
*/

/* --2--*/
const numOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var selectedText = this.innerHTML;
    makeSound(selectedText);

    addAnimation(selectedText);
  });

  document.addEventListener("keydown", (event) => {
    var keyPressed = event.key;
    makeSound(keyPressed);
    addAnimation(keyPressed);
  });
}

function makeSound(item) {
  switch (item) {
    case "w":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "d":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(item);
  }
}

function addAnimation(item) {
  var selectdItem = document.querySelector("." + item);
  selectdItem.classList.add("pressed");

  setTimeout(() => {
    selectdItem.classList.remove("pressed");
  }, 100);
}
