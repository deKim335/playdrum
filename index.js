var audio = [];
audio.push(new Audio("sounds/crash.mp3"));
audio.push(new Audio("sounds/kick-bass.mp3"));
audio.push(new Audio("sounds/snare.mp3"));
audio.push(new Audio("sounds/tom-1.mp3"));
audio.push(new Audio("sounds/tom-2.mp3"));
audio.push(new Audio("sounds/tom-3.mp3"));
audio.push(new Audio("sounds/tom-4.mp3"));


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

    });
};

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      audio[0].play();
      break;
    case "a":
      audio[1].play();
      break;
    case "s":
      audio[2].play();
      break;
    case "d":
      audio[3].play();
      break;
    case "j":
      audio[4].play();
      break;
    case "k":
      audio[5].play();
      break;
    case "l":
      audio[6].play();
      break;

    default:
      console.log(event.key);
  };

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed"), 500
    });
}
