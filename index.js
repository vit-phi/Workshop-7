// Function to play sound based on key
function playSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      default:
        console.log(key);
    }
  }
  
  // Function to add animation to button
  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    }
  }
  
  // Detect button click
  var drumButtons = document.querySelectorAll(".drum");
  for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  }
  
  // Detect keyboard press
  document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
  });
  