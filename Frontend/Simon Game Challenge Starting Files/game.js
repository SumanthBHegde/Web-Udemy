let buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keydown(function (event) {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
    $("h1").text("Level " + level);
  }
});

$(".btn").click(() => {
  var userChosenColour = $(".btn").attr("id");
  userClickedPattern.push(userChosenColour);
  console.log($(".btn").attr("id"));
  playSound(userChosenColour);
  animatePress(userClickedPattern);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(150)
    .fadeIn(150);

  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");

  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      // Next level
      setTimeout(() => {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("wrong");
    var wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
